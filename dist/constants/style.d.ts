import { ThemeOptionsType } from "./theme";
export declare const Style: {
    theme: {
        previewCard: {
            width: string;
            height: string;
            background: string;
        };
        nftProposalCard: {
            mediaWidth: string;
            mediaHeight: string;
        };
        showTxnLinks: boolean;
        textBlockPadding: string;
        borderStyle: string;
        lineSpacing: number;
        maximumPricingDecimals: number;
        linkColor: string;
        bodyFont: string;
        titleFont: string;
        headerFont: string;
        mediaContentFont: {
            fontFamily: string;
        };
        buttonColor: {
            primaryBackground: string;
            primaryText: string;
            background: string;
            text: string;
        };
        defaultBorderRadius: number;
        fontSizeFull: number;
    };
    styles: {
        auctionHouseList: (_: ThemeOptionsType) => string;
        cardOuter: (theme: ThemeOptionsType, { hasClickEvent }: any) => string;
        cardLink: (_: ThemeOptionsType) => string;
        cardHeader: (theme: ThemeOptionsType) => string;
        cardMediaWrapper: (theme: ThemeOptionsType) => string;
        cardItemInfo: (theme: ThemeOptionsType) => string;
        cardAuctionPricing: (theme: ThemeOptionsType, { type, }: {
            type: "perpetual" | "reserve-active" | "reserve-pending" | "unknown";
        }) => string;
        cardTitle: (theme: ThemeOptionsType) => string;
        fullPage: (theme: ThemeOptionsType) => string;
        fullMediaWrapper: (_: ThemeOptionsType) => string;
        fullItemInfo: (_: ThemeOptionsType) => string;
        fullTitle: (_: ThemeOptionsType) => string;
        fullDescription: (theme: ThemeOptionsType) => string;
        fullOwnerAddress: (theme: ThemeOptionsType) => string[];
        fullLabel: (theme: ThemeOptionsType) => string[];
        fullPageHistoryItem: (theme: ThemeOptionsType) => string[];
        fullPageHistoryItemDescription: (theme: ThemeOptionsType) => string;
        fullPageHistoryItemMeta: () => string;
        fullPageHistoryTxnLink: () => string;
        nftProposalMediaWrapper: (theme: ThemeOptionsType) => string;
        nftProposalInfoLayout: (theme: ThemeOptionsType) => string;
        nftProposalActionList: (_: ThemeOptionsType) => string;
        nftProposalLabelWrapper: (_: ThemeOptionsType) => string;
        nftProposalUserView: (_: ThemeOptionsType) => string;
        nftProposalLabel: (theme: ThemeOptionsType) => string[];
        fullPageHistoryItemDatestamp: (theme: ThemeOptionsType) => string[];
        fullPageDataGrid: (_: ThemeOptionsType) => string;
        infoContainer: (theme: ThemeOptionsType, { bottomPadding }: any) => string;
        fullInfoSpacer: (_: any, { height }: {
            height: number;
        }) => string;
        fullInfoAuctionWrapper: () => string;
        fullPlaceOfferButton: (_: any) => string;
        fullInfoCreatorEquityContainer: (_: any) => string;
        fullInfoProofAuthenticityContainer: (_: any) => string;
        fullProofLink: (theme: ThemeOptionsType) => string;
        fullCreatorOwnerSection: (theme: ThemeOptionsType) => string[];
        button: (theme: ThemeOptionsType, { primary }: any) => string;
        textSubdued: (theme: ThemeOptionsType) => string[];
        pricingAmount: (theme: ThemeOptionsType) => string;
        nftProposal: (theme: ThemeOptionsType) => string;
        nftProposalActions: () => string;
        nftProposalActionButton: (theme: ThemeOptionsType, { action }: {
            action: "approve" | "deny";
        }) => string;
        nftProposalAcceptedPill: (theme: ThemeOptionsType) => string;
        nftProposalTitle: (theme: ThemeOptionsType) => string;
        mediaLoader: (_: ThemeOptionsType, { mediaLoaded, isFullPage }: any) => string;
        mediaObject: (_: ThemeOptionsType, { mediaLoaded, isFullPage }: any) => string;
        mediaAudioWrapper: (_: ThemeOptionsType) => string;
        mediaAudioWaveform: (_: ThemeOptionsType) => string;
        mediaObjectMessage: (_: ThemeOptionsType) => string;
        mediaContentText: (theme: ThemeOptionsType) => (string | {
            fontFamily: string;
        })[];
        mediaPlayButton: (_: ThemeOptionsType, { playing }: any) => string;
        mediaVideoControls: (_: ThemeOptionsType, { isFullPage }: any) => string;
        mediaFullscreenButton: (_: ThemeOptionsType) => string;
        mediaMuteButton: (_: ThemeOptionsType, { muted }: any) => string;
    };
};
