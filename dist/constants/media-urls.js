"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIZA_SITE_URL_BASE = exports.VIEW_ETHERSCAN_URL_BASE_BY_NETWORK = exports.MEDIA_URL_BASE_BY_NETWORK = void 0;
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
exports.MEDIA_URL_BASE_BY_NETWORK = {
    [reactjs_hooks_1.Networks.MAINNET]: "https://aiza.io/",
    [reactjs_hooks_1.Networks.RINKEBY]: null,
};
exports.VIEW_ETHERSCAN_URL_BASE_BY_NETWORK = {
    [reactjs_hooks_1.Networks.MAINNET]: "https://etherscan.io/token/",
    [reactjs_hooks_1.Networks.RINKEBY]: "https://rinkeby.etherscan.io/token/",
};
exports.AIZA_SITE_URL_BASE = "https://aiza.io";
