import type { NFTDataType } from "@htsoft/reactjs-hooks";
export declare const defaultGetContentData: (nft: NFTDataType, metadata: any) => {
    contentURI: string | undefined;
    metadata: any;
};
export declare type GetContentDataType = {
    getContentData?: (nft: NFTDataType, metadata: any) => {
        contentURI?: string;
        metadata: any;
    };
};
