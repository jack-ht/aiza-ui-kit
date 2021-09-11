"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaObject = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const useMediaContext_1 = require("../context/useMediaContext");
const MediaObject = ({ contentURI, metadata, a11yIdPrefix, isFullPage = false, }) => {
    var _a, _b;
    const mediaType = (0, reactjs_hooks_1.useNFTContent)(metadata.animation_url);
    const [renderingInfo, setRenderingInfo] = (0, react_1.useState)();
    const { getStyles, getString, renderers, style } = (0, useMediaContext_1.useMediaContext)();
    const request = {
        media: {
            content: contentURI
                ? {
                    uri: contentURI,
                    type: metadata.mimeType || ((_a = metadata.body) === null || _a === void 0 ? void 0 : _a.mimeType),
                }
                : undefined,
            image: metadata.image
                ? {
                    uri: metadata.image,
                    type: "image/",
                }
                : undefined,
            // from metadata.animation_url
            animation: metadata.animation_url
                ? {
                    uri: metadata.animation_url,
                    type: (_b = mediaType.content) === null || _b === void 0 ? void 0 : _b.mimeType,
                }
                : undefined,
        },
        metadata,
        renderingContext: isFullPage ? "FULL" : "PREVIEW",
    };
    (0, react_1.useEffect)(() => {
        const sortedRenderers = renderers.sort((a, b) => a.getRenderingPreference(request) > b.getRenderingPreference(request)
            ? -1
            : 1);
        setRenderingInfo(sortedRenderers[0]);
    }, [renderers, metadata, contentURI, mediaType.content]);
    if (renderingInfo) {
        const RenderingComponent = renderingInfo.render;
        return ((0, jsx_runtime_1.jsx)(RenderingComponent, { a11yIdPrefix: a11yIdPrefix, getStyles: getStyles, getString: getString, theme: style.theme, request: request }, void 0));
    }
    return (0, jsx_runtime_1.jsx)("span", {}, void 0);
};
exports.MediaObject = MediaObject;
