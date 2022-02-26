/// <reference types="node" />
export declare const ETH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ETHERMINT: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEthermint: (ethAddress: string) => string;
export declare const ethermintToEth: (ethermintAddress: string) => string;
export declare const ATMOS: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToAtmos: (ethAddress: string) => string;
export declare const atmosToEth: (atmosAddress: string) => string;
export declare const bech32ToEip55: (bech32: string, name: string, prefix: string) => string;
export declare const Eip55ToBech32: (eip55: string, name: string, prefix: string) => string;
