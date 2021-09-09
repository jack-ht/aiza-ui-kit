/// <reference types="react" />
import type { useNFTMetadataType, useNFTType, useZNFTType } from "@htsoft/reactjs-hooks";
export declare type NFTDataContext = {
    nft: useNFTType | useZNFTType;
    metadata: useNFTMetadataType;
};
export declare const NFTDataContext: import("react").Context<NFTDataContext>;
