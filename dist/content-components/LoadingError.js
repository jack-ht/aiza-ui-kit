"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingError = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const LoadingError = ({ getStyles }) => {
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("mediaObjectMessage"), { children: "Error loading content" }), void 0));
};
exports.LoadingError = LoadingError;
