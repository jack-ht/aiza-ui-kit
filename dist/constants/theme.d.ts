export declare const ThemeOptions: {
    /**
     * Overall preview card settings (width height and background)
     * @default {width: '330px', height: '330px', background: 'transparent'}
     */
    previewCard: {
        width: string;
        height: string;
        background: string;
    };
    nftProposalCard: {
        mediaWidth: string;
        mediaHeight: string;
    };
    /**
     * Flag if showing transaction history links on full view
     * should be enabled
     * @default true
     */
    showTxnLinks: boolean;
    /**
     * Padding for preview card text block
     * @default 10px 15px
     */
    textBlockPadding: string;
    /**
     * Border style for preview card text block
     * @default 2px solid #e6e6e6
     */
    borderStyle: string;
    /**
     * Line-spacing on preview component
     * @default 24
     */
    lineSpacing: number;
    /**
     * Maximum number of decimal digits to show
     * for pricing information
     * @default 8
     */
    maximumPricingDecimals: number;
    /**
     * Color for link on full preview page authenticity link
     * @default #000
     */
    linkColor: string;
    /**
     * Settings for body text font
     * @default font-family: Inter, Helvetica; font-weight: 400;
     */
    bodyFont: string;
    /**
     * Settings for title font
     * Type is parsed as a css string.
     * @default font-family: Inter, Helvetica; font-weight: 500;
     */
    titleFont: string;
    /**
     * Settings for header font
     * Type is parsed as a css string.
     * @default font-family: Inter, Helvetica; font-weight: 500;
     */
    headerFont: string;
    /**
     * Font to use when rendering text NFTs
     * @default {fontFamily: "Times New Roman"}
     */
    mediaContentFont: {
        fontFamily: string;
    };
    /**
     * Button color configurations
     * @default {primaryBackground: '#333', primaryText: '#fff', background: '#eee'}
     */
    buttonColor: {
        primaryBackground: string;
        primaryText: string;
        background: string;
        text: string;
    };
    /**
     * Border radius to use around preview card
     * @default 4
     */
    defaultBorderRadius: number;
    /**
     * Font size base for full view page
     * @default 16
     */
    fontSizeFull: number;
};
export declare type ThemeOptionsType = typeof ThemeOptions;
