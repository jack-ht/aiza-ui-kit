"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFull = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const NFTDataContext_1 = require("../context/NFTDataContext");
const MediaObject_1 = require("../components/MediaObject");
const useMediaContext_1 = require("../context/useMediaContext");
const getContentDataOptions_1 = require("../utils/getContentDataOptions");
const MediaFull = ({ a11yIdPrefix, getContentData = getContentDataOptions_1.defaultGetContentData, }) => {
    const { getStyles } = (0, useMediaContext_1.useMediaContext)();
    const { nft: { data }, metadata: { metadata, error }, } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const getContent = () => {
        if (metadata && data) {
            return ((0, jsx_runtime_1.jsx)(MediaObject_1.MediaObject, Object.assign({ isFullPage: true, a11yIdPrefix: a11yIdPrefix }, getContentData(data, metadata)), void 0));
        }
        if (error) {
            return (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("mediaLoader"), { children: "error fetching..." }), void 0);
        }
        return (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("mediaLoader"), { children: "loading..." }), void 0);
    };
    const media = getContent();
    return (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullMediaWrapper"), { children: media }), void 0);
};
exports.MediaFull = MediaFull;
