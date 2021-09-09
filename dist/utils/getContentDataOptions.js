"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGetContentData = void 0;
const defaultGetContentData = (nft, metadata) => {
    return {
        contentURI: nft && "aizaNFT" in nft && nft.aizaNFT
            ? nft.aizaNFT.contentURI
            : undefined,
        metadata,
    };
};
exports.defaultGetContentData = defaultGetContentData;
