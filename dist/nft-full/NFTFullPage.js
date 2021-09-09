"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTFullPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useMediaContext_1 = require("../context/useMediaContext");
const ProofAuthenticity_1 = require("./ProofAuthenticity");
const MediaFull_1 = require("./MediaFull");
const AuctionInfo_1 = require("./AuctionInfo");
const BidHistory_1 = require("./BidHistory");
const CreatorEquity_1 = require("./CreatorEquity");
const MediaInfo_1 = require("./MediaInfo");
const PlaceOfferButton_1 = require("./PlaceOfferButton");
const NFTDataProvider_1 = require("../context/NFTDataProvider");
const useA11yIdPrefix_1 = require("../utils/useA11yIdPrefix");
const NFTFullPage = ({ children, config, ...wrapperProps }) => {
    const a11yIdPrefix = (0, useA11yIdPrefix_1.useA11yIdPrefix)("media");
    const { getStyles } = (0, useMediaContext_1.useMediaContext)();
    const allowOffer = config === null || config === void 0 ? void 0 : config.allowOffer;
    const showPerpetual = config === null || config === void 0 ? void 0 : config.showPerpetual;
    const getChildren = () => {
        if (children) {
            return children;
        }
        return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(MediaFull_1.MediaFull, { a11yIdPrefix: a11yIdPrefix }, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("fullPageDataGrid"), { children: [(0, jsx_runtime_1.jsx)(MediaInfo_1.MediaInfo, { a11yIdPrefix: a11yIdPrefix }, void 0), (0, jsx_runtime_1.jsx)(PlaceOfferButton_1.PlaceOfferButton, { allowOffer: allowOffer }, void 0), (0, jsx_runtime_1.jsx)(AuctionInfo_1.AuctionInfo, { showPerpetual: showPerpetual }, void 0), (0, jsx_runtime_1.jsx)(ProofAuthenticity_1.ProofAuthenticity, {}, void 0), (0, jsx_runtime_1.jsx)(BidHistory_1.BidHistory, { showPerpetual: showPerpetual }, void 0), (0, jsx_runtime_1.jsx)(CreatorEquity_1.CreatorEquity, {}, void 0)] }), void 0)] }, void 0));
    };
    return ((0, jsx_runtime_1.jsx)(NFTDataProvider_1.NFTDataProvider, Object.assign({}, wrapperProps, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullPage"), { children: getChildren() }), void 0) }), void 0));
};
exports.NFTFullPage = NFTFullPage;
