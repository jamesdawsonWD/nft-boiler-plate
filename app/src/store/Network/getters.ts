import { GetterTree } from 'vuex';
import { RootState, Network } from '../types';

export const getters: GetterTree<Network, RootState> = {
    Web3: state => state.web3,
    Address: state => state.userAddress,
    Network: state => state.networkData.network,
    NetworkId: (state): number => state.networkData.networkId,
    Tokens: state => (syntheticToken: string) => state.contracts.syntheticTokens[syntheticToken],
    Avatars: state => state.contracts.avatars
};
