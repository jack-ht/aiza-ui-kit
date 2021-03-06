"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useMediaContext_1 = require("../context/useMediaContext");
const Button = ({ children, primary = false, href, onClick, }) => {
    const { getStyles } = (0, useMediaContext_1.useMediaContext)();
    const ButtonComponent = href ? "a" : "button";
    return ((0, jsx_runtime_1.jsx)(ButtonComponent, Object.assign({ onClick: onClick, href: href, target: href ? "_blank" : undefined }, getStyles("button", { primary }), { children: children }), void 0));
};
exports.Button = Button;
