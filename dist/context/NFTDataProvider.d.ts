/// <reference types="react" />
import { useNFTType, useNFTMetadataType } from "@htsoft/reactjs-hooks";
export declare type NFTDataProviderProps = {
    id: string;
    contract?: string;
    refreshInterval?: number;
    children: React.ReactNode;
    initialData?: {
        nft?: useNFTType["data"];
        metadata?: useNFTMetadataType["metadata"];
    };
};
export declare const NFTDataProvider: ({ id, children, contract, refreshInterval, initialData, }: NFTDataProviderProps) => JSX.Element;
