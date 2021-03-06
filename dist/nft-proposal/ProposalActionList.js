"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalActionList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useMediaContext_1 = require("../context/useMediaContext");
const NFTDataContext_1 = require("../context/NFTDataContext");
const PricingString_1 = require("../utils/PricingString");
const ProposalActionList = ({ onAccept, onDeny, }) => {
    var _a;
    const { nft: { data }, } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const { getStyles, getString } = (0, useMediaContext_1.useMediaContext)();
    const getActions = () => {
        var _a, _b;
        if (((_a = data === null || data === void 0 ? void 0 : data.pricing.reserve) === null || _a === void 0 ? void 0 : _a.approved) === false) {
            return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposalActions"), { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({}, getStyles("nftProposalActionButton", { action: "approve" }), { onClick: onAccept }, { children: "approve" }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({}, getStyles("nftProposalActionButton", { action: "deny" }), { onClick: onDeny }, { children: "reject" }), void 0)] }), void 0));
        }
        if ((_b = data === null || data === void 0 ? void 0 : data.pricing.reserve) === null || _b === void 0 ? void 0 : _b.approved) {
            return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("nftProposalActions"), { children: (0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("nftProposalAcceptedPill"), { children: getString("PROPOSAL_ACCEPTED") }), void 0) }), void 0));
        }
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposalActionList"), { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposalLabelWrapper"), { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("nftProposalLabel"), { children: getString("RESERVE_PRICE") }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullOwnerAddress"), { children: ((_a = data === null || data === void 0 ? void 0 : data.pricing.reserve) === null || _a === void 0 ? void 0 : _a.reservePrice) !== undefined && ((0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: data.pricing.reserve.reservePrice, showUSD: false }, void 0)) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposalLabelWrapper"), { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("nftProposalLabel"), { children: getString("PROPOSAL_CURATOR_SHARE") }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("fullOwnerAddress"), { children: [(data === null || data === void 0 ? void 0 : data.pricing.reserve) && data.pricing.reserve.curatorFeePercentage, "%"] }), void 0)] }), void 0), getActions()] }), void 0));
};
exports.ProposalActionList = ProposalActionList;
