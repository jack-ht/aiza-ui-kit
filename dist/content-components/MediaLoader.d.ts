import React from "react";
import type { RenderRequest } from "./RendererConfig";
export declare function useMediaObjectProps({ uri, request, a11yIdPrefix, getStyles, }: {
    uri: string | undefined;
    request: RenderRequest;
    a11yIdPrefix?: string;
    getStyles: any;
}): {
    loading: boolean;
    error: string | undefined;
    props: any;
};
export declare const MediaLoader: ({ getStyles, children, loading, error, }: {
    getStyles: any;
    children: React.ReactNode;
    loading: boolean;
    error: string | undefined;
}) => JSX.Element;
