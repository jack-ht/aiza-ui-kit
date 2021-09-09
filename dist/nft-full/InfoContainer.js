"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useMediaContext_1 = require("../context/useMediaContext");
const InfoContainer = ({ children, titleString, bottomPadding = true, }) => {
    const { getStyles, getString } = (0, useMediaContext_1.useMediaContext)();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("infoContainer", { bottomPadding }), { children: [(0, jsx_runtime_1.jsx)("h4", Object.assign({}, getStyles("fullLabel"), { children: getString(titleString) }), void 0), children] }), void 0));
};
exports.InfoContainer = InfoContainer;
