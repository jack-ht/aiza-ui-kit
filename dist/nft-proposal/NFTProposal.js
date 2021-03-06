"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTProposal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useMediaContext_1 = require("../context/useMediaContext");
const NFTDataProvider_1 = require("../context/NFTDataProvider");
const ProposalMediaDisplay_1 = require("./ProposalMediaDisplay");
const ProposalActionList_1 = require("./ProposalActionList");
const NFTProposal = ({ actionConfiguration, ...wrapperProps }) => {
    const { getStyles } = (0, useMediaContext_1.useMediaContext)();
    return ((0, jsx_runtime_1.jsx)(NFTDataProvider_1.NFTDataProvider, Object.assign({}, wrapperProps, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposal"), { children: [(0, jsx_runtime_1.jsx)(ProposalMediaDisplay_1.ProposalMediaDisplay, {}, void 0), (0, jsx_runtime_1.jsx)(ProposalActionList_1.ProposalActionList, Object.assign({}, actionConfiguration), void 0)] }), void 0) }), void 0));
};
exports.NFTProposal = NFTProposal;
