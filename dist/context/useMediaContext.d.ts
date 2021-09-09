import type { Strings } from "../constants/strings";
import { ThemeType } from "./MediaContext";
export declare function useMediaContext(): {
    getString: (stringName: keyof typeof Strings) => string;
    getStyles: (themeKey: keyof ThemeType["styles"], flags?: any) => any;
    style: {
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
            auctionHouseList: (_: {
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
            }) => string;
            cardOuter: (theme: {
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
            }, { hasClickEvent }: any) => string;
            cardLink: (_: {
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
            }) => string;
            cardHeader: (theme: {
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
            }) => string;
            cardMediaWrapper: (theme: {
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
            }) => string;
            cardItemInfo: (theme: {
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
            }) => string;
            cardAuctionPricing: (theme: {
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
            }, { type, }: {
                type: "unknown" | "perpetual" | "reserve-active" | "reserve-pending";
            }) => string;
            cardTitle: (theme: {
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
            }) => string;
            fullPage: (theme: {
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
            }) => string;
            fullMediaWrapper: (_: {
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
            }) => string;
            fullItemInfo: (_: {
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
            }) => string;
            fullTitle: (_: {
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
            }) => string;
            fullDescription: (theme: {
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
            }) => string;
            fullOwnerAddress: (theme: {
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
            }) => string[];
            fullLabel: (theme: {
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
            }) => string[];
            fullPageHistoryItem: (theme: {
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
            }) => string[];
            fullPageHistoryItemDescription: (theme: {
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
            }) => string;
            fullPageHistoryItemMeta: () => string;
            fullPageHistoryTxnLink: () => string;
            nftProposalMediaWrapper: (theme: {
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
            }) => string;
            nftProposalInfoLayout: (theme: {
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
            }) => string;
            nftProposalActionList: (_: {
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
            }) => string;
            nftProposalLabelWrapper: (_: {
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
            }) => string;
            nftProposalUserView: (_: {
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
            }) => string;
            nftProposalLabel: (theme: {
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
            }) => string[];
            fullPageHistoryItemDatestamp: (theme: {
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
            }) => string[];
            fullPageDataGrid: (_: {
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
            }) => string;
            infoContainer: (theme: {
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
            }, { bottomPadding }: any) => string;
            fullInfoSpacer: (_: any, { height }: {
                height: number;
            }) => string;
            fullInfoAuctionWrapper: () => string;
            fullPlaceOfferButton: (_: any) => string;
            fullInfoCreatorEquityContainer: (_: any) => string;
            fullInfoProofAuthenticityContainer: (_: any) => string;
            fullProofLink: (theme: {
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
            }) => string;
            fullCreatorOwnerSection: (theme: {
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
            }) => string[];
            button: (theme: {
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
            }, { primary }: any) => string;
            textSubdued: (theme: {
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
            }) => string[];
            pricingAmount: (theme: {
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
            }) => string;
            nftProposal: (theme: {
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
            }) => string;
            nftProposalActions: () => string;
            nftProposalActionButton: (theme: {
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
            }, { action }: {
                action: "approve" | "deny";
            }) => string;
            nftProposalAcceptedPill: (theme: {
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
            }) => string;
            nftProposalTitle: (theme: {
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
            }) => string;
            mediaLoader: (_: {
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
            }, { mediaLoaded, isFullPage }: any) => string;
            mediaObject: (_: {
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
            }, { mediaLoaded, isFullPage }: any) => string;
            mediaAudioWrapper: (_: {
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
            }) => string;
            mediaAudioWaveform: (_: {
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
            }) => string;
            mediaObjectMessage: (_: {
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
            }) => string;
            mediaContentText: (theme: {
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
            }) => (string | {
                fontFamily: string;
            })[];
            mediaPlayButton: (_: {
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
            }, { playing }: any) => string;
            mediaVideoControls: (_: {
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
            }, { isFullPage }: any) => string;
            mediaFullscreenButton: (_: {
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
            }) => string;
            mediaMuteButton: (_: {
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
            }, { muted }: any) => string;
        };
    };
    networkId: import("../constants/networks").NetworkIDs;
    strings: {
        COLLECTED: string;
        CREATED: string;
        VIEW_AIZA: string;
        PROOF_AUTHENTICITY: string;
        ETHERSCAN_TXN: string;
        VIEW_IPFS: string;
        LIST_PRICE: string;
        HIGHEST_BID: string;
        RESERVE_PRICE: string;
        TOP_BID: string;
        SOLD_FOR: string;
        CARD_CREATED_BY: string;
        CARD_OWNED_BY: string;
        ENDS_IN: string;
        CREATOR: string;
        OWNER: string;
        AUCTION_ENDS: string;
        BIDDER: string;
        NFT_HISTORY: string;
        CREATOR_EQUITY: string;
        AUCTION_SOLD_FOR: string;
        BID_HISTORY_BID: string;
        OPEN_OFFERS: string;
        PLACE_BID: string;
        PLACE_OFFER: string;
        WINNER: string;
        BID_HISTORY_LISTED: string;
        BID_HISTORY_WON_AUCTION: string;
        BID_HISTORY_VIEW_TRANSACTION: string;
        BID_HISTORY_MINTED: string;
        PROPOSED_BY: string;
        PROPOSAL_CURATOR_SHARE: string;
        PROPOSAL_ACCEPTED: string;
        PRICING_LOADING: string;
        NO_PRICING_PLACEHOLDER: string;
        AUDIO_CONTROLS_PLAY: string;
        AUDIO_CONTROLS_PAUSE: string;
        VIDEO_CONTROLS_LABEL: string;
        VIDEO_CONTROLS_FULLSCREEN: string;
        VIDEO_CONTROLS_PLAY: string;
        VIDEO_CONTROLS_PAUSE: string;
        VIDEO_CONTROLS_MUTE: string;
    };
    renderers: import("../content-components/RendererConfig").RendererConfig[];
};
