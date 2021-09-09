"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTDataProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const NFTDataContext_1 = require("./NFTDataContext");
let isZNFT = (p) => p && !!p.aizaNFT;
let isOpensea = (p) => p && !!p.openseaInfo;
const NFTDataProvider = ({ id, children, contract, refreshInterval, initialData, useBetaIndexer = false, }) => {
    var _a, _b, _c, _d;
    const { nft: nftInitial } = initialData || {};
    if ((nftInitial === null || nftInitial === void 0 ? void 0 : nftInitial.tokenData) && !useBetaIndexer) {
        throw new Error("useBetaIndexer={true} prop on NFTFull/NFTDataProvider/NFTPreview required when using indexer-style initialData");
    }
    const nft = (0, reactjs_hooks_1.useNFT)(contract, id, {
        loadCurrencyInfo: true,
        initialData: nftInitial,
        refreshInterval: refreshInterval,
        useBetaIndexer,
    });
    const fetchedMetadata = (0, reactjs_hooks_1.useNFTMetadata)(isZNFT(nft.data) ? (_a = nft.data) === null || _a === void 0 ? void 0 : _a.nft.metadataURI : undefined, initialData === null || initialData === void 0 ? void 0 : initialData.metadata);
    const openseaMetadata = isOpensea(nft.data)
        ? {
            loading: !!nft.data,
            metadata: nft.data
                ? reactjs_hooks_1.DataTransformers.openseaDataToMetadata(nft.data)
                : undefined,
        }
        : undefined;
    let aizaIndexerMetadata = nft &&
        nft.data &&
        "aizaIndexerResponse" in nft.data &&
        ((_d = (_c = (_b = nft.data) === null || _b === void 0 ? void 0 : _b.aizaIndexerResponse) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.json);
    const metadata = aizaIndexerMetadata
        ? {
            metadata: aizaIndexerMetadata,
            loading: !!aizaIndexerMetadata,
            error: nft.error ? new Error(nft.error) : undefined,
        }
        : openseaMetadata || fetchedMetadata;
    return ((0, jsx_runtime_1.jsx)(NFTDataContext_1.NFTDataContext.Provider, Object.assign({ value: { nft, metadata } }, { children: children }), void 0));
};
exports.NFTDataProvider = NFTDataProvider;
