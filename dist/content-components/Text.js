"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const MediaLoader_1 = require("./MediaLoader");
const RendererConfig_1 = require("./RendererConfig");
exports.Text = {
    getRenderingPreference: (request) => {
        var _a, _b, _c, _d;
        if ((_b = (_a = request.media.content) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.startsWith("text/plain")) {
            return RendererConfig_1.RenderingPreference.PRIORITY;
        }
        if ((_d = (_c = request.media.content) === null || _c === void 0 ? void 0 : _c.type) === null || _d === void 0 ? void 0 : _d.startsWith("text/")) {
            return RendererConfig_1.RenderingPreference.LOW;
        }
        return RendererConfig_1.RenderingPreference.INVALID;
    },
    render: ({ request, getStyles }) => {
        var _a;
        const media = (0, reactjs_hooks_1.useNFTContent)((_a = request.media.content) === null || _a === void 0 ? void 0 : _a.uri);
        return ((0, jsx_runtime_1.jsx)(MediaLoader_1.MediaLoader, Object.assign({ getStyles: getStyles, loading: media.content ? false : true, error: media.error }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("mediaContentText"), { children: media.content && "text" in media.content ? media.content.text : "" }), void 0) }), void 0));
    },
};
