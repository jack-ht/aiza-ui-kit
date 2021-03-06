"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaInfo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const NFTDataContext_1 = require("../context/NFTDataContext");
const AddressView_1 = require("../components/AddressView");
const useMediaContext_1 = require("../context/useMediaContext");
const MediaInfo = ({ a11yIdPrefix }) => {
    const { getStyles, getString } = (0, useMediaContext_1.useMediaContext)();
    const { nft: { data }, metadata: { metadata, error }, } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const getContent = () => {
        if (metadata && data) {
            return {
                title: metadata.name,
                description: metadata.description,
            };
        }
        if (error) {
            return {
                title: "?",
                description: "?",
            };
        }
        return {
            title: "...",
            description: "...",
        };
    };
    const { title, description } = getContent();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("fullItemInfo"), { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({}, getStyles("fullTitle"), { children: title }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ id: `${a11yIdPrefix}description` }, getStyles("fullDescription"), { children: description }), void 0), (0, jsx_runtime_1.jsxs)("dl", Object.assign({}, getStyles("fullCreatorOwnerSection"), { children: [(data === null || data === void 0 ? void 0 : data.nft.creator) && ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", Object.assign({}, getStyles("fullLabel"), { children: getString("CREATOR") }), void 0), (0, jsx_runtime_1.jsx)("dd", Object.assign({}, getStyles("fullOwnerAddress"), { children: data ? (0, jsx_runtime_1.jsx)(AddressView_1.AddressView, { address: data.nft.creator }, void 0) : " " }), void 0)] }, void 0)), (0, jsx_runtime_1.jsx)("dt", Object.assign({}, getStyles("fullLabel"), { children: getString("OWNER") }), void 0), (0, jsx_runtime_1.jsx)("dd", Object.assign({}, getStyles("fullOwnerAddress"), { children: data ? (0, jsx_runtime_1.jsx)(AddressView_1.AddressView, { address: data.nft.owner }, void 0) : " " }), void 0)] }), void 0)] }), void 0));
};
exports.MediaInfo = MediaInfo;
