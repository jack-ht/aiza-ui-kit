"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceOfferButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const media_urls_1 = require("../constants/media-urls");
const useMediaContext_1 = require("../context/useMediaContext");
const Button_1 = require("../components/Button");
const NFTDataContext_1 = require("../context/NFTDataContext");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const PlaceOfferButton = ({ allowOffer }) => {
    var _a;
    const { nft } = (0, react_1.useContext)(NFTDataContext_1.NFTDataContext);
    const { getString, getStyles } = (0, useMediaContext_1.useMediaContext)();
    if (!nft.data) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0);
    }
    // Disable offer functionality if not a aiza NFT or if offers are disabled
    if ((allowOffer === false || !("aizaNFT" in nft.data)) &&
        nft.data.pricing.auctionType !== reactjs_hooks_1.AuctionType.RESERVE) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0);
    }
    function getBidURLParts() {
        const data = nft.data;
        if (!data) {
            return;
        }
        if (data.nft.contract.knownContract !== "aiza" &&
            data.pricing.auctionType === reactjs_hooks_1.AuctionType.RESERVE) {
            return [
                media_urls_1.AIZA_SITE_URL_BASE,
                "auction",
                data.nft.contract.address,
                data.nft.tokenId,
                "bid",
            ];
        }
        return [
            media_urls_1.AIZA_SITE_URL_BASE,
            data.nft.creator,
            data.nft.tokenId,
            data.pricing.auctionType === reactjs_hooks_1.AuctionType.RESERVE ? "auction/bid" : "bid",
        ];
    }
    const bidURL = (_a = getBidURLParts()) === null || _a === void 0 ? void 0 : _a.join("/");
    if (!bidURL) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0);
    }
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("fullPlaceOfferButton"), { children: (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ primary: true, href: bidURL }, { children: getString(nft.data.pricing.auctionType === reactjs_hooks_1.AuctionType.RESERVE
                ? "PLACE_BID"
                : "PLACE_OFFER") }), void 0) }), void 0));
};
exports.PlaceOfferButton = PlaceOfferButton;
