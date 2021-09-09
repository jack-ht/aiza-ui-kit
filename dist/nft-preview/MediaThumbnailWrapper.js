"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaThumbnailWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const NFTDataContext_1 = require("../context/NFTDataContext");
const useMediaContext_1 = require("../context/useMediaContext");
const MediaThumbnailWrapper = ({ children, onClick, href, }) => {
    var _a, _b;
    const { getStyles } = (0, useMediaContext_1.useMediaContext)();
    const { nft } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const auctionStatus = (_b = (_a = nft === null || nft === void 0 ? void 0 : nft.data) === null || _a === void 0 ? void 0 : _a.pricing) === null || _b === void 0 ? void 0 : _b.status;
    const LinkComponent = href ? "a" : "button";
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardOuter", { hasClickEvent: !!onClick, auctionStatus }), { children: [(href || onClick) && ((0, jsx_runtime_1.jsx)(LinkComponent, Object.assign({}, getStyles("cardLink"), { href: href, onClick: onClick }, { children: "View NFT" }), void 0)), children] }), void 0));
};
exports.MediaThumbnailWrapper = MediaThumbnailWrapper;
