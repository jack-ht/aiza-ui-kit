"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProofAuthenticity = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const NFTDataContext_1 = require("../context/NFTDataContext");
const media_urls_1 = require("../constants/media-urls");
const useMediaContext_1 = require("../context/useMediaContext");
const InfoContainer_1 = require("./InfoContainer");
const ProofLink = ({ href, children, styles, }) => ((0, jsx_runtime_1.jsx)("a", Object.assign({}, styles, { href: href, target: "_blank" }, { children: children }), void 0));
const ProofAuthenticity = () => {
    const { nft: { data }, } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const { getString, getStyles, networkId } = (0, useMediaContext_1.useMediaContext)();
    const linkStyles = getStyles("fullProofLink");
    const getContent = (nft) => {
        var _a;
        return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(ProofLink, Object.assign({ styles: linkStyles, href: `${media_urls_1.VIEW_ETHERSCAN_URL_BASE_BY_NETWORK[networkId]}${nft.contract.address}?a=${nft.tokenId}` }, { children: getString("ETHERSCAN_TXN") }), void 0), (0, jsx_runtime_1.jsx)(ProofLink, Object.assign({ styles: linkStyles, href: (data && "aizaNFT" in data && ((_a = data === null || data === void 0 ? void 0 : data.aizaNFT) === null || _a === void 0 ? void 0 : _a.contentURI)) ||
                        (data === null || data === void 0 ? void 0 : data.nft.metadataURI) }, { children: getString("VIEW_IPFS") }), void 0), data && "aizaNFT" in data && ((0, jsx_runtime_1.jsx)(ProofLink, Object.assign({ styles: linkStyles, href: `${media_urls_1.MEDIA_URL_BASE_BY_NETWORK[networkId]}${nft.creator}/${nft.tokenId}` }, { children: getString("VIEW_AIZA") }), void 0))] }, void 0));
    };
    return ((0, jsx_runtime_1.jsx)(InfoContainer_1.InfoContainer, Object.assign({ titleString: "PROOF_AUTHENTICITY", bottomPadding: false }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullInfoProofAuthenticityContainer"), { children: data && getContent(data.nft) }), void 0) }), void 0));
};
exports.ProofAuthenticity = ProofAuthenticity;
