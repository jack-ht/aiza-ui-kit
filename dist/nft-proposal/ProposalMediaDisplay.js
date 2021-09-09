"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalMediaDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AddressView_1 = require("../components/AddressView");
const MediaObject_1 = require("../components/MediaObject");
const useMediaContext_1 = require("../context/useMediaContext");
const NFTDataContext_1 = require("../context/NFTDataContext");
const ProposalMediaDisplay = ({}) => {
    var _a;
    const { nft: { data }, metadata: { metadata }, } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const { getStyles, getString } = (0, useMediaContext_1.useMediaContext)();
    const getContent = () => {
        var _a;
        if (metadata && data) {
            return {
                media: ((0, jsx_runtime_1.jsx)(MediaObject_1.MediaObject, { contentURI: data && "aizaNFT" in data ? (_a = data.aizaNFT) === null || _a === void 0 ? void 0 : _a.contentURI : undefined, metadata: metadata }, void 0)),
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
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("nftProposalMediaWrapper"), { children: media }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposalInfoLayout"), { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("nftProposalTitle"), { children: title }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposalLabelWrapper"), { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("nftProposalLabel"), { children: hasCreator
                                    ? getString("CARD_CREATED_BY")
                                    : getString("CARD_OWNED_BY") }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullOwnerAddress"), { children: address && (0, jsx_runtime_1.jsx)(AddressView_1.AddressView, { address: address }, void 0) }), void 0)] }), void 0), ((_a = data === null || data === void 0 ? void 0 : data.pricing.reserve) === null || _a === void 0 ? void 0 : _a.tokenOwner) && ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposalLabelWrapper"), { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("nftProposalLabel"), { children: getString("PROPOSED_BY") }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullOwnerAddress"), { children: address && ((0, jsx_runtime_1.jsx)(AddressView_1.AddressView, { address: data.pricing.reserve.tokenOwner.id }, void 0)) }), void 0)] }), void 0))] }), void 0)] }, void 0));
};
exports.ProposalMediaDisplay = ProposalMediaDisplay;
