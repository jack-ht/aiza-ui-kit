"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingString = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useMediaContext_1 = require("../context/useMediaContext");
const PricingString = ({ pricing, showUSD = true, }) => {
    var _a;
    const { getStyles, style } = (0, useMediaContext_1.useMediaContext)();
    const { format } = new Intl.NumberFormat(typeof window === "undefined" ? "en-US" : navigator.language, {
        style: "decimal",
        maximumFractionDigits: style.theme.maximumPricingDecimals,
    });
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [format(parseFloat(pricing.prettyAmount)), " ", pricing.currency.symbol, showUSD && pricing.computedValue && ((0, jsx_runtime_1.jsxs)("span", Object.assign({}, getStyles("textSubdued"), { children: [" ", "$", format(parseInt((_a = pricing.computedValue) === null || _a === void 0 ? void 0 : _a.inUSD, 10))] }), void 0))] }, void 0));
};
exports.PricingString = PricingString;
