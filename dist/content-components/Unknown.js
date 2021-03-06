"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unknown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RendererConfig_1 = require("./RendererConfig");
exports.Unknown = {
    getRenderingPreference: (request) => {
        var _a, _b;
        if ((_b = (_a = request.media.content) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.startsWith("text/")) {
            return RendererConfig_1.RenderingPreference.LOW;
        }
        return RendererConfig_1.RenderingPreference.INVALID;
    },
    render: ({ request, getStyles }) => {
        var _a;
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("mediaObjectMessage"), { children: ((_a = request.media.content) === null || _a === void 0 ? void 0 : _a.type) || "unknown" }), void 0));
    },
};
