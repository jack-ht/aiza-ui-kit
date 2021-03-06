"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const HTML_1 = require("./HTML");
const RendererConfig_1 = require("./RendererConfig");
exports.Model = {
    renderingPage: "https://gateway.pinata.cloud/ipfs/QmVc3UHHL6dhjWuY4cryY3yoEu1HoX8KcFafq3K4ELbZEJ/model-viewer.html",
    getRenderingPreference: (request) => {
        var _a, _b;
        if ((_b = (_a = request.media.content) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.startsWith("model/gltf")) {
            return request.renderingContext === "FULL"
                ? RendererConfig_1.RenderingPreference.PRIORITY
                : RendererConfig_1.RenderingPreference.NORMAL;
        }
        return RendererConfig_1.RenderingPreference.INVALID;
    },
    render: (props) => {
        var _a, _b, _c;
        const mediaURI = ((_a = props.request.media.content) === null || _a === void 0 ? void 0 : _a.uri) || ((_b = props.request.media.animation) === null || _b === void 0 ? void 0 : _b.uri);
        if (!mediaURI) {
            // todo: better error
            return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0);
        }
        const params = new URLSearchParams();
        params.append("src", mediaURI);
        if (props.request.media.image) {
            params.append("poster", (_c = props.request.media.image) === null || _c === void 0 ? void 0 : _c.uri);
        }
        props.request.media.content = {
            uri: `${exports.Model.renderingPage}#${params.toString()}`,
        };
        return (0, jsx_runtime_1.jsx)(HTML_1.HTML.render, Object.assign({}, props), void 0);
    },
};
