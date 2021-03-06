/// <reference types="react" />
import { NetworkIDs } from "@htsoft/reactjs-hooks";
import { Strings } from "../constants/strings";
import { Style } from "../constants/style";
import type { RendererConfig } from "../content-components/RendererConfig";
export declare type ThemeType = typeof Style;
export declare type MediaContextType = {
    style: ThemeType;
    networkId: NetworkIDs;
    strings: typeof Strings;
    renderers: RendererConfig[];
};
export declare const MediaContext: import("react").Context<MediaContextType>;
