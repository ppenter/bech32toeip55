import {
  decode,
  encode,
  fromWords,
  toWords
} from 'bech32';
import {
  isValidChecksumAddress,
  stripHexPrefix,
  toChecksumAddress
} from 'crypto-addr-codec';


function makeChecksummedHexEncoder(chainId?: number) {
  return (data: Buffer) => toChecksumAddress(data.toString('hex'), chainId || null);
}

function makeChecksummedHexDecoder(chainId?: number) {
  return (data: string) => {
    const stripped = stripHexPrefix(data);
    if (
      !isValidChecksumAddress(data, chainId || null) &&
      stripped !== stripped.toLowerCase() &&
      stripped !== stripped.toUpperCase()
    ) {
      throw Error('Invalid address checksum');
    }
    return Buffer.from(stripHexPrefix(data), 'hex');
  };
}

const hexChecksumChain = (name: string, chainId?: number) => ({
  decoder: makeChecksummedHexDecoder(chainId),
  encoder: makeChecksummedHexEncoder(chainId),
  name,
});

export const ETH = hexChecksumChain('ETH');

function makeBech32Encoder(prefix: string) {
  return (data: Buffer) => encode(prefix, toWords(data));
}

function makeBech32Decoder(currentPrefix: string) {
  return (data: string) => {
    const { prefix, words } = decode(data);
    if (prefix !== currentPrefix) {
      throw Error('Unrecognised address format');
    }
    return Buffer.from(fromWords(words));
  };
}


const bech32Chain = (name: string, prefix: string) => ({
  decoder: makeBech32Decoder(prefix),
  encoder: makeBech32Encoder(prefix),
  name,
});

export const ETHERMINT = bech32Chain('ETHERMINT', 'ethm');

export const ethToEthermint = (ethAddress: string) => {
  let data = ETH.decoder(ethAddress);
  return ETHERMINT.encoder(data);
};

export const ethermintToEth = (ethermintAddress: string) => {
  let data = ETHERMINT.decoder(ethermintAddress);
  return ETH.encoder(data);
};


export const ATMOS = bech32Chain('ATMOS', 'atmos');

export const ethToAtmos = (ethAddress: string) => {
  let data = ETH.decoder(ethAddress);
  return ATMOS.encoder(data);
}

export const atmosToEth = (atmosAddress: string) => {
  let data = ATMOS.decoder(atmosAddress);
  return ETH.encoder(data);
};

export const bech32ToEip55 = (bech32: string, name: string, prefix: string) => {
  let bech32Engine = bech32Chain(name, prefix);
  let data = bech32Engine.decoder(bech32);
  return ETH.encoder(data);
}

export const Eip55ToBech32 = (eip55: string, name: string, prefix: string) => {
  let bech32Engine = bech32Chain(name, prefix);
  let data = ETH.decoder(eip55);
  return bech32Engine.encoder(data);
}
