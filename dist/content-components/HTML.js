"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTML = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const MediaLoader_1 = require("./MediaLoader");
const RendererConfig_1 = require("./RendererConfig");
const HTMLRenderer = (requestProps) => {
    var _a, _b;
    const { getStyles, request } = requestProps;
    const { props, loading, error } = (0, MediaLoader_1.useMediaObjectProps)({
        uri: ((_a = request.media.content) === null || _a === void 0 ? void 0 : _a.uri) || ((_b = request.media.animation) === null || _b === void 0 ? void 0 : _b.uri),
        ...requestProps,
    });
    const [windowHeight, setWindowHeight] = (0, react_1.useState)(() => window.innerHeight);
    (0, react_1.useEffect)(() => {
        const resizeHandler = () => {
            setWindowHeight(window.innerHeight);
        };
        document.addEventListener("resize", resizeHandler);
        return () => {
            document.removeEventListener("resize", resizeHandler);
        };
    });
    return ((0, jsx_runtime_1.jsx)(MediaLoader_1.MediaLoader, Object.assign({ getStyles: getStyles, loading: loading, error: error }, { children: (0, jsx_runtime_1.jsx)("iframe", Object.assign({ sandbox: "allow-scripts", height: Math.floor(windowHeight * 0.6), width: "100%", style: { border: 0 } }, props), void 0) }), void 0));
};
exports.HTML = {
    getRenderingPreference(request) {
        var _a, _b, _c, _d, _e, _f;
        if (((_b = (_a = request.media.content) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.startsWith("text/html")) ||
            ((_d = (_c = request.media.content) === null || _c === void 0 ? void 0 : _c.type) === null || _d === void 0 ? void 0 : _d.startsWith("application/pdf")) ||
            ((_f = (_e = request.media.animation) === null || _e === void 0 ? void 0 : _e.type) === null || _f === void 0 ? void 0 : _f.startsWith("text/html"))) {
            return request.renderingContext === "FULL"
                ? RendererConfig_1.RenderingPreference.PRIORITY
                : RendererConfig_1.RenderingPreference.LOW;
        }
        return RendererConfig_1.RenderingPreference.INVALID;
    },
    render: HTMLRenderer,
};
