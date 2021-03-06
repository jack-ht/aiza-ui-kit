import React from "react";
import { NetworkIDs } from "@htsoft/reactjs-hooks";
import type { Strings } from "../constants/strings";
import type { RecursivePartial } from "../utils/RecursivePartial";
import type { RendererConfig } from "../content-components/RendererConfig";
import { ThemeType } from "./MediaContext";
declare type MediaContextConfigurationProps = {
    /**
     * NetworkID to set. Use Networks export to set constant. Default is mainnet.
     */
    networkId?: NetworkIDs;
    children: React.ReactNode;
    /**
     * Style configuration object. Contains both a theme and styles. Theme are generic settings for rendering styles.Style configuration object. Contains both a theme and styles.
     * Theme are generic settings for rendering styles.
     * Styles are raw emotion css-in-js styles for more fine-grained display settings.
     */
    style?: RecursivePartial<ThemeType>;
    /**
     * List of content strings.
     */
    strings?: Partial<typeof Strings>;
    /**
     * List of renderers.
     */
    renderers?: RendererConfig[];
};
export declare const MediaConfiguration: ({ networkId, style, children, strings, renderers, }: MediaContextConfigurationProps) => JSX.Element;
export {};
