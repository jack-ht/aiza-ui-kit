"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const css_1 = require("@emotion/css");
const svg_icons_1 = require("./svg-icons");
const theme_1 = require("./theme");
const pricingLayout = (theme) => (0, css_1.css) `
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  grid-auto-column: 1fr;
  padding: ${theme.textBlockPadding};
  border-top: ${theme.borderStyle};
`;
const buttonCommonSize = (size) => `
  padding: ${size};
  width: ${size};
  height: ${size};
  background: #eee;
  border: 0;
  border-radius: 200px;
  color: transparent;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 10px;
`;
const buttonReset = `
  font: inherit;
  text-decoration: none;
  margin: 0;
  border: 0;
  cursor: pointer;
  display: inline-block;
`;
const CENTER_FULL_CONTAINER = `
  position: absolute;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  display: flex;
  height: 100%;
`;
function renderSVG(svg) {
    return `background-image: url("data:image/svg+xml,${encodeURIComponent(svg)}");`;
}
exports.Style = {
    theme: theme_1.ThemeOptions,
    styles: {
        auctionHouseList: (_) => (0, css_1.css) `
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `,
        // Styles for preview card
        cardOuter: (theme, { hasClickEvent }) => (0, css_1.css) `
      background: ${theme.previewCard.background};
      overflow: hidden;
      border-radius: ${theme.defaultBorderRadius}px;
      border: ${theme.borderStyle};
      margin: 15px;
      width: ${theme.previewCard.width};
      line-height: ${theme.lineSpacing}px;
      ${theme.bodyFont}
      transition: transform 0.1s ease-in-out;
      position: relative;
      ${hasClickEvent
            ? `
        &:active {
          transform: scale(0.98);
        }
      `
            : ""}
    `,
        cardLink: (_) => (0, css_1.css) `
      ${buttonReset}
      color: transparent;
      background: transparent;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
    `,
        cardHeader: (theme) => (0, css_1.css) `
      padding: ${theme.textBlockPadding};
      ${theme.titleFont}
    `,
        cardMediaWrapper: (theme) => (0, css_1.css) `
      width: ${theme.previewCard.width};
      height: ${theme.previewCard.height};
      display: flex;
      overflow: hidden;
      position: relative;
      justify-content: center;
    `,
        cardItemInfo: (theme) => (0, css_1.css) `
      padding: ${theme.textBlockPadding};
      border-top: ${theme.borderStyle};
    `,
        cardAuctionPricing: (theme, { type, }) => {
            const getActiveStyle = () => {
                switch (type) {
                    case "reserve-active":
                        return `
              background: #000;
              color: #fff;
            `;
                    case "reserve-pending":
                        return `
              background: #e6e6e6; 
            `;
                    case "unknown":
                    case "perpetual":
                        return ``;
                }
            };
            return (0, css_1.css) `
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: auto auto;
        grid-auto-column: 1fr;
        padding: ${theme.textBlockPadding};
        border-top: ${theme.borderStyle};
        ${getActiveStyle()}
      `;
        },
        cardTitle: (theme) => (0, css_1.css) `
      font-size: inherit;
      margin: 0;
      max-width: calc(${theme.previewCard.width} - 30px),
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      ${theme.titleFont}
    `,
        // Styles for full-page view
        fullPage: (theme) => theme.bodyFont,
        fullMediaWrapper: (_) => (0, css_1.css) `
      margin: 5%;
      position: relative;
    `,
        fullItemInfo: (_) => (0, css_1.css) ``,
        fullTitle: (_) => (0, css_1.css) `
      font-weight: inherit;
      font-size: 30px;
      margin: 20px 0;
    `,
        fullDescription: (theme) => (0, css_1.css) `
      font-size: ${theme.fontSizeFull}px;
      margin: 10px 0;
    `,
        fullOwnerAddress: (theme) => [
            (0, css_1.css) `
        font-size: ${theme.fontSizeFull}px;
        margin: 0;
      `,
            theme.titleFont,
        ],
        fullLabel: (theme) => [
            (0, css_1.css) `
        margin: 0 0 5px;
        text-transform: uppercase;
        font-size: 14px;
        opacity: 0.5;
      `,
            theme.bodyFont,
        ],
        fullPageHistoryItem: (theme) => [
            (0, css_1.css) `
        margin-top: 14px;
        display: flex;
        flex-direction: column;
        font-weight: 300;
      `,
            theme.bodyFont,
        ],
        // CSS Class for restyling and targeting
        fullPageHistoryItemDescription: (theme) => (0, css_1.css) `
      ${theme.showTxnLinks ? "margin-right: 20px;" : ""}
    `,
        fullPageHistoryItemMeta: () => (0, css_1.css) `
      position: relative;
    `,
        fullPageHistoryTxnLink: () => (0, css_1.css) `
      font-size: 0;
      position: relative;
      display: block;
      &:hover {
        :after {
          opacity: 1;
          background-color: #f2f2f2;
        }
      }
      :after {
        border-radius: 4px;
        padding: 4px;
        opacity: 0.8;
        background-repeat: no-repeat;
        background-position: center;
        top: 14px;
        z-index: 10;
        right: 0;
        transition: opacity 0.4s ease-in;
        content: " ";
        width: 14px;
        height: 14px;
        position: absolute;
        ${renderSVG(svg_icons_1.SVG_NEXT_ICON)}
      }
    `,
        nftProposalMediaWrapper: (theme) => (0, css_1.css) `
      border-radius: 4px;
      display: flex;
      height: ${theme.nftProposalCard.mediaHeight};
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: ${theme.nftProposalCard.mediaWidth};
    `,
        nftProposalInfoLayout: (theme) => (0, css_1.css) `
      flex-grow: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin: 0 30px;
      position: relative;

      &:after {
        content: " ";
        position: absolute;
        top: 10px;
        bottom: 10px;
        right: 5px;
        border-right: ${theme.borderStyle};
        border-right-width: 1px;
      }
    `,
        nftProposalActionList: (_) => (0, css_1.css) `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 10px;
      padding: 5px 0;
    `,
        nftProposalLabelWrapper: (_) => (0, css_1.css) ``,
        nftProposalUserView: (_) => (0, css_1.css) ``,
        nftProposalLabel: (theme) => [
            (0, css_1.css) `
        text-transform: uppercase;
        font-size: 12px;
        margin-bottom: 10px;
        opacity: 0.5;
      `,
            theme.bodyFont,
        ],
        fullPageHistoryItemDatestamp: (theme) => [
            (0, css_1.css) `
        font-size: 12px;
        padding-top: 2px;
        opacity: 0.5;
      `,
            theme.bodyFont,
        ],
        fullPageDataGrid: (_) => (0, css_1.css) `
      display: grid;
      grid-gap: 20px;
    `,
        infoContainer: (theme, { bottomPadding }) => (0, css_1.css) `
        border: ${theme.borderStyle};
        border-radius: ${theme.defaultBorderRadius}px;
        padding: 20px 20px ${bottomPadding ? "20px" : 0};
        position: relative;
      `,
        fullInfoSpacer: (_, { height = 15 }) => (0, css_1.css) `
      height: ${height}px;
    `,
        fullInfoAuctionWrapper: () => ``,
        fullPlaceOfferButton: (_) => (0, css_1.css) ``,
        fullInfoCreatorEquityContainer: (_) => (0, css_1.css) `
      margin-top: 20px;
    `,
        fullInfoProofAuthenticityContainer: (_) => (0, css_1.css) `
      margin-top: 20px;
    `,
        fullProofLink: (theme) => (0, css_1.css) `
      display: block;
      text-decoration: none;
      color: ${theme.linkColor};
      padding: 20px;
      margin: 0 -20px;
      border-top: ${theme.borderStyle};

      :hover {
        background-color: #f2f2f2;
      }
      :after {
        content: " ";
        width: 14px;
        height: 14px;
        opacity: 0.5;
        ${renderSVG(svg_icons_1.SVG_NEXT_ICON)}
        color: #eee;
        right: 20px;
        position: absolute;
      }
    `,
        fullCreatorOwnerSection: (theme) => [
            pricingLayout(theme),
            (0, css_1.css) `
        border-top: 0;
      `,
        ],
        // Generic styles
        button: (theme, { primary }) => (0, css_1.css) `
      ${buttonReset}
      background: ${primary
            ? theme.buttonColor.primaryBackground
            : theme.buttonColor.background};
      color: ${primary
            ? theme.buttonColor.primaryText
            : theme.buttonColor.text};
      border-radius: ${theme.defaultBorderRadius}px;
      padding: 11px;
      transition: transform 0.1s ease-in-out;
      &:active {
        transform: scale(0.98);
      }
    `,
        textSubdued: (theme) => [
            (0, css_1.css) `
        opacity: 0.5;
      `,
            theme.bodyFont,
        ],
        pricingAmount: (theme) => theme.titleFont,
        nftProposal: (theme) => (0, css_1.css) `
      border: ${theme.borderStyle};
      border-radius: ${theme.defaultBorderRadius}px;
      display: flex;
      padding: 20px;
    `,
        nftProposalActions: () => (0, css_1.css) `
      grid-area: 1 / 2 / span 1 / span 2;
      text-align: right;
    `,
        nftProposalActionButton: (theme, { action }) => (0, css_1.css) `
      border-radius: 1000px;
      background-color: ${theme.buttonColor.background};
      background-repeat: no-repeat;
      color: transparent;
      width: 40px;
      height: 40px;
      background-position: center;
      border: 0;
      cursor: pointer;

      ${action === "approve" && `margin-right: 15px;`}

      ${action === "approve" && renderSVG(svg_icons_1.SVG_AUCTION_APPROVE)}
      ${action === "deny" && renderSVG(svg_icons_1.SVG_AUCTION_DENY)}
    `,
        nftProposalAcceptedPill: (theme) => (0, css_1.css) `
      color: #009165;
      background: rgba(64, 193, 154, 0.2);
      padding: 5px 10px;
      display: inline-block;
      border-radius: 4px;

      ${theme.bodyFont}
    `,
        nftProposalTitle: (theme) => (0, css_1.css) `
      font-size: 40px;
      grid-column: 1 / 3;

      ${theme.titleFont}
    `,
        mediaLoader: (_, { mediaLoaded, isFullPage }) => (0, css_1.css) `
      pointer-events: none;
      ${isFullPage ? "min-height: 40vh;" : ""}
      width: 100%;
      justify-content: center;
      align-items: center;
      opacity: ${mediaLoaded ? "0" : "1"};
      transition: 0.2s ease-out opacity;
      ${CENTER_FULL_CONTAINER}
      ${isFullPage && !mediaLoaded
            ? `
      &:after {
        content: " ";
        ${isFullPage ? "height: 30vh" : ""}
      }
      `
            : ""}
    `,
        mediaObject: (_, { mediaLoaded, isFullPage }) => (0, css_1.css) `
      opacity: ${mediaLoaded ? "1" : "0"};
      transition: 0.2s ease-in opacity;
      ${isFullPage ? "max-height: 70vh;" : "height: 100%;"}
      ${isFullPage ? "max-width: 100%;" : "width: 100%;"}
      display: block;
      margin: 0 auto;
      flex-shrink: 1;
      min-width: 0px;
      object-fit: cover;
    `,
        mediaAudioWrapper: (_) => (0, css_1.css) `
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    `,
        mediaAudioWaveform: (_) => (0, css_1.css) `
      width: 100%;
      cursor: pointer;
    `,
        mediaObjectMessage: (_) => (0, css_1.css) `
      align-self: center;
    `,
        mediaContentText: (theme) => [
            (0, css_1.css) `
        white-space: pre;
        text-align: left;
        padding: 20px;
        width: 100%;
      `,
            theme.mediaContentFont,
        ],
        mediaPlayButton: (_, { playing }) => (0, css_1.css) `
      ${buttonCommonSize("32px")}
      background-image: url("data:image/svg+xml,${encodeURIComponent(playing ? svg_icons_1.SVG_PAUSE : svg_icons_1.SVG_PLAY_ARROW)}");
      z-index: 8;
    `,
        mediaVideoControls: (_, { isFullPage }) => (0, css_1.css) `
      ${CENTER_FULL_CONTAINER}
      ${isFullPage
            ? `
        z-index: 1; /* todo: iain remove need for line */
        opacity: 0;
        &:hover,
        &:focus,
        &:focus-within {
          opacity: 1;
        }
        transition: opacity 0.6s ease-in-out;
        transition-delay: 0 0.3s;
      `
            : "display: none;"}
    `,
        mediaFullscreenButton: (_) => (0, css_1.css) `
      ${buttonCommonSize("20px")}
      background-color: #000;
      ${renderSVG(svg_icons_1.SVG_FULLSCREEN)}
    `,
        mediaMuteButton: (_, { muted }) => (0, css_1.css) `
      ${buttonCommonSize("20px")}
      background-color: #000;
      background-image: url("data:image/svg+xml,${encodeURIComponent(muted ? svg_icons_1.SVG_UNMUTED : svg_icons_1.SVG_MUTED)}");
    `,
    },
};
