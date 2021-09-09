"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionHouseList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const useMediaContext_1 = require("../context/useMediaContext");
const NFTPreview_1 = require("../nft-preview/NFTPreview");
const AuctionHouseList = ({ curatorIds, approved = true, onClick, }) => {
    const { data, loading, error } = (0, reactjs_hooks_1.useAuctions)(curatorIds, approved);
    const { getStyles } = (0, useMediaContext_1.useMediaContext)();
    if (loading || error) {
        return (0, jsx_runtime_1.jsx)("span", { children: "..." }, void 0);
    }
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("auctionHouseList"), { children: data &&
            data.map((auction) => ((0, jsx_runtime_1.jsx)(NFTPreview_1.NFTPreview, { id: auction.tokenId, contract: auction.tokenContract, onClick: onClick ? (evt) => onClick(evt, auction) : undefined }, auction.id))) }), void 0));
};
exports.AuctionHouseList = AuctionHouseList;
