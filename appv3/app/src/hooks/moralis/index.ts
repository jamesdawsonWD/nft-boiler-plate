import {
    ResolveCallParams,
    UseResolveCallOptions,
    _useResolveCall,
} from "../../internal/_useResolveAsyncCall";
import { useMoralis } from "../useMoralis";

export interface UseMoralisWeb3ApiCallOptions extends UseResolveCallOptions { }

export const useMoralisWeb3ApiCall = <Params extends ResolveCallParams, Result>(
    call: (params: Params) => Promise<Result>,
    params?: Params,
    options?: UseMoralisWeb3ApiCallOptions,
) => {
    const result = _useResolveCall<Result | null, Params>(
        call,
        null,
        params,
        options,
        false,
    );

    return result;
};

export const useMoralisWeb3Api = () => {
    const { Moralis } = useMoralis();

    return { Web3API: Moralis.Web3API, ...Moralis.Web3API };
};
