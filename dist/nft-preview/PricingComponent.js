"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useMediaContext_1 = require("../context/useMediaContext");
const NFTDataContext_1 = require("../context/NFTDataContext");
const CountdownDisplay_1 = require("../components/CountdownDisplay");
const PricingString_1 = require("../utils/PricingString");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
function isInFuture(timestamp) {
    const timestampParsed = parseInt(timestamp);
    return timestampParsed > Math.floor(new Date().getTime() / 1000);
}
const PricingComponent = ({ showPerpetual = true, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { nft: { data }, } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const { getStyles, getString } = (0, useMediaContext_1.useMediaContext)();
    const pricing = data === null || data === void 0 ? void 0 : data.pricing;
    if (pricing &&
        !pricing.reserve &&
        pricing.status === reactjs_hooks_1.AuctionStateInfo.NO_PRICING) {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardAuctionPricing", { type: "unknown" }), { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("textSubdued"), { children: getString("RESERVE_PRICE") }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("pricingAmount"), { children: getString("NO_PRICING_PLACEHOLDER") }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("textSubdued"), { children: getString("HIGHEST_BID") }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("pricingAmount"), { children: getString("NO_PRICING_PLACEHOLDER") }), void 0)] }), void 0));
    }
    if (pricing &&
        showPerpetual &&
        (!pricing.reserve || ((_a = pricing.reserve) === null || _a === void 0 ? void 0 : _a.finalizedAtTimestamp)) &&
        pricing.auctionType === reactjs_hooks_1.AuctionType.PERPETUAL) {
        let listPrice = null;
        if ((_b = pricing.perpetual.ask) === null || _b === void 0 ? void 0 : _b.pricing) {
            const perpetualPricing = (_c = pricing.perpetual.ask) === null || _c === void 0 ? void 0 : _c.pricing;
            listPrice = ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: getString("LIST_PRICE") }), void 0), (0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: perpetualPricing, showUSD: false }, void 0)] }, void 0));
        }
        const highestBid = pricing.perpetual.highestBid;
        if (!highestBid && ((_d = pricing.reserve) === null || _d === void 0 ? void 0 : _d.previousBids.length)) {
            const highestPreviousBid = pricing.reserve.previousBids[0];
            return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardAuctionPricing", { type: "reserve-pending" }), { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: getString("SOLD_FOR") }), void 0), (0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("pricingAmount"), { children: (0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: highestPreviousBid.pricing, showUSD: false }, void 0) }), void 0), listPrice] }), void 0));
        }
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardAuctionPricing", { type: "perpetual" }), { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: getString("HIGHEST_BID") }), void 0), (0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("pricingAmount"), { children: highestBid ? ((0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { showUSD: false, pricing: highestBid.pricing }, void 0)) : (getString("NO_PRICING_PLACEHOLDER")) }), void 0), listPrice] }), void 0));
    }
    if (pricing && pricing.reserve) {
        if (((_e = pricing.reserve) === null || _e === void 0 ? void 0 : _e.current.reserveMet) &&
            !((_f = pricing.reserve) === null || _f === void 0 ? void 0 : _f.current.likelyHasEnded)) {
            const highestBid = (_g = pricing.reserve) === null || _g === void 0 ? void 0 : _g.current.highestBid;
            return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardAuctionPricing", { type: "reserve-active" }), { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: getString("TOP_BID") }), void 0), (0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("pricingAmount"), { children: highestBid && ((0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: highestBid === null || highestBid === void 0 ? void 0 : highestBid.pricing, showUSD: false }, void 0)) }), void 0), ((_h = pricing.reserve) === null || _h === void 0 ? void 0 : _h.expectedEndTimestamp) &&
                        isInFuture(pricing.reserve.expectedEndTimestamp) && ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: getString("ENDS_IN") }), void 0), (0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("pricingAmount"), { children: (0, jsx_runtime_1.jsx)(CountdownDisplay_1.CountdownDisplay, { to: pricing.reserve.expectedEndTimestamp }, void 0) }), void 0)] }, void 0))] }), void 0));
        }
        if (pricing.reserve && pricing.reserve.current.likelyHasEnded) {
            const highestBid = pricing.reserve.currentBid || pricing.reserve.previousBids[0];
            return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardAuctionPricing", { type: "reserve-finished" }), { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: getString("AUCTION_SOLD_FOR") }), void 0), (0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("pricingAmount"), { children: (0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { showUSD: false, pricing: highestBid.pricing }, void 0) }), void 0)] }), void 0));
        }
        if ((_j = pricing.reserve) === null || _j === void 0 ? void 0 : _j.reservePrice) {
            return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardAuctionPricing", { type: "reserve-pending" }), { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("textSubdued"), { children: getString("RESERVE_PRICE") }), void 0), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { showUSD: false, pricing: pricing.reserve.reservePrice }, void 0) }, void 0)] }), void 0));
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("cardAuctionPricing", { type: "unknown" }), { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("textSubdued"), { children: getString("PRICING_LOADING") }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("pricingAmount"), { children: getString("PRICING_LOADING") }), void 0)] }), void 0));
};
exports.PricingComponent = PricingComponent;
