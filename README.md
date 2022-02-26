# Ethermint address converter

A simple converter between `ETH` address and `Ethermint` addresses.

## Installation

``` sh
npm install @ppenter/bech32toeip55
```

## Usage

### Converter

``` ts
import {ethToEthermint, ethermintToEth} from "@ppenter/bech32toeip55"

let address = ethToEthermint("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"

let address = ethermintToEth("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

let address = bech32ToEip55("ATMOS","atmos","atmos1tkfnk5tk3m25w69j6ngqd29n76l696gmh836h0");
//0x5d933b51768Ed54768b2D4D006a8B3f6Bfa2e91B

let address = Eip55ToBech32("ATMOS","atmos","0x5d933b51768Ed54768b2D4D006a8B3f6Bfa2e91B");
//atmos1tkfnk5tk3m25w69j6ngqd29n76l696gmh836h0
```

### Decoders

``` ts
import {ETH, ETHERMINT} from "@hanchon/ethermint-address-converter"
let hex = ETH.decoder("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"

hex = ETHERMINT.decoder("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"
```

### Encoders

``` ts
import {ETH, ETHERMINT} from "@hanchon/ethermint-address-converter"
let address = ETH.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71","hex"))
// address === "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

address = ETHERMINT.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71","hex"))
// address === "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"
```

## Build locally

``` sh
yarn install
yarn test
yarn build
```

## Reference

- [ENSDOMAINS-AddressEnconder](https://github.com/ensdomains/address-encoder)
