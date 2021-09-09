"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIZA_SITE_URL_BASE = exports.VIEW_ETHERSCAN_URL_BASE_BY_NETWORK = exports.MEDIA_URL_BASE_BY_NETWORK = void 0;
const networks_1 = require("./networks");
exports.MEDIA_URL_BASE_BY_NETWORK = {
    [networks_1.Networks.MAINNET]: "https://aiza.co/",
    [networks_1.Networks.RINKEBY]: null,
};
exports.VIEW_ETHERSCAN_URL_BASE_BY_NETWORK = {
    [networks_1.Networks.MAINNET]: "https://etherscan.io/token/",
    [networks_1.Networks.RINKEBY]: "https://rinkeby.etherscan.io/token/",
};
exports.AIZA_SITE_URL_BASE = "https://aiza.co";
