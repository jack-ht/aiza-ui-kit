/// <reference types="react" />
import { NFTFullPage } from "./NFTFullPage";
declare const FullComponents: {
    AuctionInfo: ({ showPerpetual }: {
        showPerpetual?: boolean | undefined;
    }) => JSX.Element;
    BidHistory: ({ showPerpetual }: {
        showPerpetual?: boolean | undefined;
    }) => JSX.Element;
    CreatorEquity: () => JSX.Element;
    MediaInfo: ({ a11yIdPrefix }: {
        a11yIdPrefix?: string | undefined;
    }) => JSX.Element;
    PlaceOfferButton: ({ allowOffer }: {
        allowOffer?: boolean | undefined;
    }) => JSX.Element;
    ProofAuthenticity: () => JSX.Element;
    MediaFull: ({ a11yIdPrefix, getContentData, }: import("../utils/getContentDataOptions").GetContentDataType & {
        a11yIdPrefix?: string | undefined;
    }) => JSX.Element;
};
export { FullComponents, NFTFullPage };
