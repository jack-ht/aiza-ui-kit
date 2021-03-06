"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorEquity = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const useMediaContext_1 = require("../context/useMediaContext");
const NFTDataContext_1 = require("../context/NFTDataContext");
const InfoContainer_1 = require("./InfoContainer");
const CreatorEquity = () => {
    var _a;
    const { nft: { data }, } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const { getStyles } = (0, useMediaContext_1.useMediaContext)();
    const getContent = (bidSharePercentage) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [Math.floor(bidSharePercentage), "%"] }, void 0));
    if (!data || !("aizaNFT" in data) || !data.aizaNFT) {
        return (0, jsx_runtime_1.jsx)(react_1.default.Fragment, {}, void 0);
    }
    return ((0, jsx_runtime_1.jsx)(InfoContainer_1.InfoContainer, Object.assign({ titleString: "CREATOR_EQUITY" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullInfoCreatorEquityContainer"), { children: getContent((_a = data.aizaNFT) === null || _a === void 0 ? void 0 : _a.creatorBidSharePercentage) }), void 0) }), void 0));
};
exports.CreatorEquity = CreatorEquity;
