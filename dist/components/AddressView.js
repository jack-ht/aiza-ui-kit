"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const PREFIX_ADDRESS = "0x";
const AddressView = ({ address, showChars = 6 }) => {
    var _a;
    const username = (0, reactjs_hooks_1.useAizaUsername)(address);
    const addressFirst = address.slice(0, showChars + PREFIX_ADDRESS.length);
    const addressLast = address.slice(address.length - showChars);
    if ((_a = username.username) === null || _a === void 0 ? void 0 : _a.username) {
        return (0, jsx_runtime_1.jsx)("span", { children: `@${username.username.username}` }, void 0);
    }
    if (!username.error && !username.username) {
        return (0, jsx_runtime_1.jsx)("span", { children: "..." }, void 0);
    }
    return ((0, jsx_runtime_1.jsxs)("span", { children: [addressFirst, "...", addressLast] }, void 0));
};
exports.AddressView = AddressView;
