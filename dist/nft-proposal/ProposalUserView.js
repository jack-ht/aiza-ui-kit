"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalUserView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const AddressView_1 = require("src/components/AddressView");
const useMediaContext_1 = require("src/context/useMediaContext");
const ProposalUserView = ({ address }) => {
    var _a, _b, _c, _d;
    const { getStyles } = (0, useMediaContext_1.useMediaContext)();
    const username = (0, reactjs_hooks_1.useAizaUsername)(address);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("nftProposalUserView"), { children: [((_a = username.username) === null || _a === void 0 ? void 0 : _a.profile_image_url) && ((0, jsx_runtime_1.jsx)("img", { src: (_b = username.username) === null || _b === void 0 ? void 0 : _b.profile_image_url, width: "50", height: "50", alt: (_c = username.username) === null || _c === void 0 ? void 0 : _c.name }, void 0)), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)(AddressView_1.AddressView, { address: address }, void 0), ((_d = username.username) === null || _d === void 0 ? void 0 : _d.name) && ((0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: username.username.name }), void 0))] }, void 0)] }), void 0));
};
exports.ProposalUserView = ProposalUserView;
