/// <reference types="react" />
import { NFTDataProviderProps } from "../context/NFTDataProvider";
declare type NFTFullPageProps = Omit<NFTDataProviderProps, "children"> & {
    children?: React.ReactNode;
    config?: {
        allowOffer?: boolean;
        showPerpetual?: boolean;
    };
};
export declare const NFTFullPage: ({ children, config, ...wrapperProps }: NFTFullPageProps) => JSX.Element;
export {};
