"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTDataContext = void 0;
const react_1 = require("react");
const DEFAULT_OBJECT = {
    loading: true,
    error: undefined,
};
exports.NFTDataContext = (0, react_1.createContext)({
    nft: { ...DEFAULT_OBJECT, currencyLoaded: false },
    metadata: { ...DEFAULT_OBJECT, metadata: undefined },
});
