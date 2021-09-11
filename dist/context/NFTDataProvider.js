"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTDataProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const NFTDataContext_1 = require("./NFTDataContext");
let isAizaNFT = (p) => p && !!p.aizaNFT;
let isOpensea = (p) => p && !!p.openseaInfo;
const NFTDataProvider = ({ id, children, contract, refreshInterval, initialData, }) => {
    var _a;
    const { nft: nftInitial } = initialData || {};
    const nft = (0, reactjs_hooks_1.useNFT)(contract, id, {
        loadCurrencyInfo: true,
        initialData: nftInitial,
        refreshInterval: refreshInterval,
    });
    const fetchedMetadata = (0, reactjs_hooks_1.useNFTMetadata)(isAizaNFT(nft.data) ? (_a = nft.data) === null || _a === void 0 ? void 0 : _a.nft.metadataURI : undefined, initialData === null || initialData === void 0 ? void 0 : initialData.metadata);
    const openseaMetadata = isOpensea(nft.data)
        ? {
            loading: !!nft.data,
            metadata: nft.data
                ? reactjs_hooks_1.DataTransformers.openseaDataToMetadata(nft.data)
                : undefined,
        }
        : undefined;
    const metadata = openseaMetadata || fetchedMetadata;
    return ((0, jsx_runtime_1.jsx)(NFTDataContext_1.NFTDataContext.Provider, Object.assign({ value: { nft, metadata } }, { children: children }), void 0));
};
exports.NFTDataProvider = NFTDataProvider;
