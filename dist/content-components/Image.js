"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.ImageRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const MediaLoader_1 = require("./MediaLoader");
const RendererConfig_1 = require("./RendererConfig");
exports.ImageRenderer = (0, react_1.forwardRef)((requestProps, ref) => {
    var _a, _b;
    const { getStyles, request } = requestProps;
    const { props, loading, error } = (0, MediaLoader_1.useMediaObjectProps)({
        uri: ((_a = request.media.content) === null || _a === void 0 ? void 0 : _a.uri) || ((_b = request.media.image) === null || _b === void 0 ? void 0 : _b.uri),
        ...requestProps,
    });
    return ((0, jsx_runtime_1.jsx)(MediaLoader_1.MediaLoader, Object.assign({ getStyles: getStyles, loading: loading, error: error }, { children: (0, jsx_runtime_1.jsx)("img", Object.assign({ ref: ref }, props), void 0) }), void 0));
});
exports.Image = {
    getRenderingPreference: (request) => {
        var _a, _b;
        if (request.media.image) {
            // Make low priority only if full screen, move to normal priority if preview
            if (request.renderingContext === "FULL" && request.media.animation) {
                return RendererConfig_1.RenderingPreference.LOW;
            }
            return RendererConfig_1.RenderingPreference.NORMAL;
        }
        if ((_b = (_a = request.media.content) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.startsWith("image/")) {
            return RendererConfig_1.RenderingPreference.NORMAL;
        }
        return RendererConfig_1.RenderingPreference.INVALID;
    },
    render: exports.ImageRenderer,
};
