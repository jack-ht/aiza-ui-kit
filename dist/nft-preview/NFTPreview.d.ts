/// <reference types="react" />
import { NFTDataProviderProps } from "../context/NFTDataProvider";
export declare type NFTPreviewProps = {
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
    href?: string;
    children?: React.ReactNode;
    showBids?: boolean;
    showPerpetual?: boolean;
} & Omit<NFTDataProviderProps, "children">;
export declare const NFTPreview: ({ onClick, href, showBids, showPerpetual, children, ...wrapperProps }: NFTPreviewProps) => JSX.Element;
