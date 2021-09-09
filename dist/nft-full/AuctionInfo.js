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
exports.AuctionInfo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const react_1 = __importStar(require("react"));
const PricingString_1 = require("../utils/PricingString");
const AddressView_1 = require("../components/AddressView");
const CountdownDisplay_1 = require("../components/CountdownDisplay");
const NFTDataContext_1 = require("../context/NFTDataContext");
const useMediaContext_1 = require("../context/useMediaContext");
const InfoContainer_1 = require("./InfoContainer");
const AuctionInfo = ({ showPerpetual = true }) => {
    var _a, _b, _c;
    const { nft } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const { getStyles, getString } = (0, useMediaContext_1.useMediaContext)();
    const AuctionInfoWrapper = ({ children, ...containerArgs }) => ((0, jsx_runtime_1.jsx)(InfoContainer_1.InfoContainer, Object.assign({}, containerArgs, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullInfoAuctionWrapper"), { children: children }), void 0) }), void 0));
    if (!nft.data) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0);
    }
    const { data } = nft;
    if (data.pricing.status === reactjs_hooks_1.AuctionStateInfo.NO_PRICING) {
        return (0, jsx_runtime_1.jsx)(react_1.default.Fragment, {}, void 0);
    }
    if (data.pricing.status === reactjs_hooks_1.AuctionStateInfo.PERPETUAL_ASK && showPerpetual) {
        return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [data.pricing.perpetual.ask && ((0, jsx_runtime_1.jsx)(AuctionInfoWrapper, Object.assign({ titleString: "LIST_PRICE" }, { children: (0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: data.pricing.perpetual.ask.pricing }, void 0) }), void 0)), (0, jsx_runtime_1.jsx)(AuctionInfoWrapper, Object.assign({ titleString: "OPEN_OFFERS" }, { children: "Be the first one to bid on this piece!" }), void 0)] }, void 0));
    }
    const reserve = data.pricing.reserve;
    if (data.pricing.reserve &&
        data.pricing.reserve.current.likelyHasEnded &&
        (data.pricing.reserve.status === "Finished" ||
            data.pricing.reserve.status === "Active")) {
        const highestPreviousBid = data.pricing.reserve.currentBid || data.pricing.reserve.previousBids[0];
        return ((0, jsx_runtime_1.jsxs)(AuctionInfoWrapper, Object.assign({ titleString: "AUCTION_SOLD_FOR" }, { children: [(0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: highestPreviousBid.pricing }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullInfoSpacer", { width: 15 })), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullLabel"), { children: getString("WINNER") }), void 0), (0, jsx_runtime_1.jsx)(AddressView_1.AddressView, { address: highestPreviousBid.bidder.id }, void 0)] }), void 0));
    }
    if (reserve !== undefined &&
        !reserve.current.likelyHasEnded &&
        reserve.expectedEndTimestamp &&
        reserve.current.highestBid !== undefined) {
        return ((0, jsx_runtime_1.jsxs)(AuctionInfoWrapper, Object.assign({ titleString: "AUCTION_ENDS" }, { children: [(0, jsx_runtime_1.jsx)(CountdownDisplay_1.CountdownDisplay, { to: reserve.expectedEndTimestamp }, void 0), (0, jsx_runtime_1.jsx)("div", { style: { height: "20px" } }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullLabel"), { children: getString("HIGHEST_BID") }), void 0), (0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: reserve.current.highestBid.pricing }, void 0), (0, jsx_runtime_1.jsx)("div", { style: { height: "20px" } }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullLabel"), { children: getString("BIDDER") }), void 0), (0, jsx_runtime_1.jsx)(AddressView_1.AddressView, { address: (_a = reserve.current.highestBid) === null || _a === void 0 ? void 0 : _a.placedBy }, void 0)] }), void 0));
    }
    // if (
    //   data.pricing.reserve &&
    //   data.pricing.status === AuctionStateInfo.RESERVE_AUCTION_ENDED &&
    //   data.pricing.reserve.currentBid
    // ) {
    //   const highestPreviousBid = data.pricing.reserve.currentBid;
    //   return (
    //     <AuctionInfoWrapper titleString="AUCTION_SOLD_FOR">
    //       <PricingString pricing={highestPreviousBid.pricing} />
    //       <div {...getStyles("fullInfoSpacer", { width: 15 })} />
    //       <div {...getStyles("fullLabel")}>{getString("WINNER")}</div>
    //       <AddressView address={highestPreviousBid.bidder.id} />
    //     </AuctionInfoWrapper>
    //   );
    // }
    // if (
    //   data.pricing.reserve &&
    //   data.pricing.status === AuctionStateInfo.RESERVE_AUCTION_FINISHED
    // ) {
    //   const highestPreviousBid = data.pricing.reserve.previousBids[0];
    //   return (
    //     <AuctionInfoWrapper titleString="AUCTION_SOLD_FOR">
    //       <PricingString pricing={highestPreviousBid.pricing} />
    //       <div {...getStyles("fullInfoSpacer", { width: 15 })} />
    //       <div {...getStyles("fullLabel")}>{getString("WINNER")}</div>
    //       <AddressView address={highestPreviousBid.bidder.id} />
    //     </AuctionInfoWrapper>
    //   );
    // }
    if (showPerpetual &&
        data.pricing.auctionType === reactjs_hooks_1.AuctionType.PERPETUAL &&
        data.pricing.perpetual.highestBid) {
        return ((0, jsx_runtime_1.jsx)(AuctionInfoWrapper, Object.assign({ titleString: "HIGHEST_BID" }, { children: (0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: (_b = data.pricing.perpetual.highestBid) === null || _b === void 0 ? void 0 : _b.pricing }, void 0) }), void 0));
    }
    if (!showPerpetual && data.pricing.auctionType === reactjs_hooks_1.AuctionType.PERPETUAL) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0);
    }
    return ((0, jsx_runtime_1.jsx)(AuctionInfoWrapper, Object.assign({ titleString: data.pricing.auctionType === reactjs_hooks_1.AuctionType.PERPETUAL
            ? "LIST_PRICE"
            : "RESERVE_PRICE" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("pricingAmount"), { children: [data.pricing.auctionType === reactjs_hooks_1.AuctionType.PERPETUAL &&
                    data.pricing.perpetual.ask && ((0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: data.pricing.perpetual.ask.pricing }, void 0)), data.pricing.auctionType === reactjs_hooks_1.AuctionType.RESERVE &&
                    ((_c = data.pricing.reserve) === null || _c === void 0 ? void 0 : _c.reservePrice) && ((0, jsx_runtime_1.jsx)(PricingString_1.PricingString, { pricing: data.pricing.reserve.reservePrice }, void 0))] }), void 0) }), void 0));
};
exports.AuctionInfo = AuctionInfo;
