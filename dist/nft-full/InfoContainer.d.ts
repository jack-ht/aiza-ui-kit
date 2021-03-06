/// <reference types="react" />
import type { Strings } from "../constants/strings";
export declare type InfoContainerProps = {
    children: React.ReactNode;
    titleString: keyof typeof Strings;
    bottomPadding?: boolean;
};
export declare const InfoContainer: ({ children, titleString, bottomPadding, }: InfoContainerProps) => JSX.Element;
