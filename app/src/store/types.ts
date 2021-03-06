import TransactionReceipt from 'web3/types';
export interface RootState {
    version: string;
}

export interface Network {
    coinbase: string;
    networkData: NetworkData;
    coinbaseReady: boolean;
    web3Ready: boolean;
    web3: any;
    contracts: {
        syntheticTokens: { [key: string]: any };
        avatars: any;
    };
    ethReady: boolean;
    userAddress: string;
    sentTransactions: {};
}

export interface NetworkData {
    currentBlock: number;
    network: string;
    networkId: number;
}
export interface User {

}
export interface ISocialMedia {
    name: string;
    url: string;
}
export interface NFTs {
    balance: {
        [key: string]: NFT[];
    },
    tokens: {
        [key: string]: NFT[];
    }
}

export interface NFT {
    [key: string]: any;
    result: any[];
}

export interface Tokens {
    [key: string]: TokenInfo;
}

export interface TokenInfo {
    symbol: string;
    name: string;
    balance: string;
}


export interface UserInterfaceManager {
    isLoading: boolean;
    modal: Modal;
    error: Error;
    success: {
        msg: string;
    };
    planetDiscoveredMessage: string;
    planetDiscoveredHeader: string;
}

export interface Modal {
    show: boolean;
    content: string;

    data?: {
        [key: string]: string | boolean | number;
    };
}
export type Address = string;

export interface TxResult {
    transactionHash?: string;
    transactionIndex?: number;
    blockHash?: string;
    blockNumber?: number;
    from?: string;
    to?: string;
    contractAddress?: string;
    cumulativeGasUsed?: number;
    gasUsed?: number;
    logs?: any[];
    events?: {
        [eventName: string]: EventLog;
    };
    nonce?: number; // non-standard field, returned only through dYdX Sender service
    status?: boolean;
    confirmation?: Promise<TransactionReceipt>;
    gasEstimate?: number;
    gas?: number;
}

export interface EventLog {
    address?: Address;
    blockHash?: Address;
    blockNumber?: number;
    event?: string;
    id?: string;
    logIndex?: number;
    raw?: any;
    returnValues?: any;
    signature?: Address;
    transactionHash?: Address;
    transactionIndex?: number;
    type?: string;
}
