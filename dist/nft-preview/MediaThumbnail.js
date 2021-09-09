"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaThumbnail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AddressView_1 = require("../components/AddressView");
const MediaObject_1 = require("../components/MediaObject");
const useMediaContext_1 = require("../context/useMediaContext");
const NFTDataContext_1 = require("../context/NFTDataContext");
const getContentDataOptions_1 = require("../utils/getContentDataOptions");
const MediaThumbnail = ({ getContentData = getContentDataOptions_1.defaultGetContentData, }) => {
    const { nft: { data }, metadata: { metadata }, } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const { getStyles, getString } = (0, useMediaContext_1.useMediaContext)();
    const getContent = () => {
        if (metadata && data) {
            return {
                media: (0, jsx_runtime_1.jsx)(MediaObject_1.MediaObject, Object.assign({}, getContentData(data, metadata)), void 0),
                title: metadata.name,
            };
        }
        return {
            media: (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("mediaLoader")), void 0),
            title: "...",
        };
    };
    const { media, title } = getContent();
    const hasCreator = data === null || data === void 0 ? void 0 : data.nft.creator;
    const address = hasCreator ? data === null || data === void 0 ? void 0 : data.nft.creator : data === null || data === void 0 ? void 0 : data.nft.owner;
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("cardMediaWrapper"), { children: media }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardItemInfo"), { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({}, getStyles("cardTitle"), { children: title }), void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: hasCreator
                                    ? getString("CARD_CREATED_BY")
                                    : getString("CARD_OWNED_BY") }), void 0), " ", (0, jsx_runtime_1.jsx)("span", { children: address && (0, jsx_runtime_1.jsx)(AddressView_1.AddressView, { address: address }, void 0) }, void 0)] }, void 0)] }), void 0)] }, void 0));
};
exports.MediaThumbnail = MediaThumbnail;
