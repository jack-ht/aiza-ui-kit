"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTFullPage = exports.FullComponents = void 0;
const NFTFullPage_1 = require("./NFTFullPage");
Object.defineProperty(exports, "NFTFullPage", { enumerable: true, get: function () { return NFTFullPage_1.NFTFullPage; } });
const AuctionInfo_1 = require("./AuctionInfo");
const BidHistory_1 = require("./BidHistory");
const CreatorEquity_1 = require("./CreatorEquity");
const MediaInfo_1 = require("./MediaInfo");
const PlaceOfferButton_1 = require("./PlaceOfferButton");
const MediaFull_1 = require("./MediaFull");
const ProofAuthenticity_1 = require("./ProofAuthenticity");
const FullComponents = {
    AuctionInfo: AuctionInfo_1.AuctionInfo,
    BidHistory: BidHistory_1.BidHistory,
    CreatorEquity: CreatorEquity_1.CreatorEquity,
    MediaInfo: MediaInfo_1.MediaInfo,
    PlaceOfferButton: PlaceOfferButton_1.PlaceOfferButton,
    ProofAuthenticity: ProofAuthenticity_1.ProofAuthenticity,
    MediaFull: MediaFull_1.MediaFull,
};
exports.FullComponents = FullComponents;
