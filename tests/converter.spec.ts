import { atmosToEth, bech32ToEip55, Eip55ToBech32, ETH, ETHERMINT, ethermintToEth, ethToAtmos, ethToEthermint } from '../src/converter';

test('test decoders', () => {
  // ETH
  let hex = ETH.decoder("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
  expect(hex.toString('hex')).toBe("e2d61e49ff8a9d724cc54d338d8076f878ac6b71");
  // ETHERMINT
  hex = ETHERMINT.decoder("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
  expect(hex.toString('hex')).toBe("e2d61e49ff8a9d724cc54d338d8076f878ac6b71");
})

test('test encoders', () => {
  // ETH
  let address = ETH.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71", "hex"))
  expect(address).toBe("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71");
  // ETHERMINT
  address = ETHERMINT.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71", "hex"))
  expect(address).toBe("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048");
})

test('test converters', () => {
  // ETH
  let address = ethToEthermint("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
  expect(address).toBe("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048");

  // ETHERMINT
  address = ethermintToEth("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
  expect(address).toBe("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71");

  // EVMOS
  address = atmosToEth("atmos1vkw6gcx4vkrq5r8gpz3dw6nvqpgaze7jmyynmr");
  console.log(address)
  expect(address).toBe("0x659da460D565860a0ce808A2d76a6c0051d167d2");
  // ETH to EVMOS 
  address = ethToAtmos("0x659da460D565860a0ce808A2d76a6c0051d167d2");
  console.log(address)
  expect(address).toBe("atmos1vkw6gcx4vkrq5r8gpz3dw6nvqpgaze7jmyynmr");

  // EVMOS
  address = bech32ToEip55("atmos1sadwqagfklxcqn9ztlceuv9w4lnk2v4tcr8n56", "ATMOS", "atmos");
  console.log(address)
  expect(address).toBe("0x875ae07509b7cd804Ca25ff19e30aEAfe76532Ab");
  // ETH to EVMOS 
  address = Eip55ToBech32("0x875ae07509b7cd804Ca25ff19e30aEAfe76532Ab", "ATMOS", "atmos");
  console.log(address)
  expect(address).toBe("atmos1sadwqagfklxcqn9ztlceuv9w4lnk2v4tcr8n56");
})




