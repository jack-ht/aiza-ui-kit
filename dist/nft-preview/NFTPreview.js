"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTPreview = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const PricingComponent_1 = require("./PricingComponent");
const NFTDataProvider_1 = require("../context/NFTDataProvider");
const MediaThumbnailWrapper_1 = require("./MediaThumbnailWrapper");
const MediaThumbnail_1 = require("./MediaThumbnail");
const react_1 = require("react");
const NFTPreview = ({ onClick = undefined, href = undefined, showBids = true, showPerpetual = true, children, ...wrapperProps }) => {
    const getChildren = () => {
        if (children) {
            return children;
        }
        return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(MediaThumbnail_1.MediaThumbnail, {}, void 0), showBids && (0, jsx_runtime_1.jsx)(PricingComponent_1.PricingComponent, { showPerpetual: showPerpetual }, void 0)] }, void 0));
    };
    return ((0, jsx_runtime_1.jsx)(NFTDataProvider_1.NFTDataProvider, Object.assign({}, wrapperProps, { children: (0, jsx_runtime_1.jsx)(MediaThumbnailWrapper_1.MediaThumbnailWrapper, Object.assign({ onClick: onClick, href: href }, { children: getChildren() }), void 0) }), void 0));
};
exports.NFTPreview = NFTPreview;
