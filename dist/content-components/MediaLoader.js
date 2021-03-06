"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaLoader = exports.useMediaObjectProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
function useMediaObjectProps({ uri, request, a11yIdPrefix, getStyles, }) {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)();
    return {
        loading,
        error,
        props: {
            "aria-describedby": `${a11yIdPrefix}description`,
            alt: request.metadata.name || request.metadata.description,
            onLoad: () => setLoading(false),
            // TODO(iain): Update Error
            onError: () => setError("Error loading"),
            src: uri,
            ...getStyles("mediaObject", {
                mediaLoaded: !loading,
                isFullPage: request.renderingContext === "FULL",
            }),
        },
    };
}
exports.useMediaObjectProps = useMediaObjectProps;
const MediaLoader = ({ getStyles, children, loading, error, }) => {
    if (!loading && !error) {
        return (0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: children }, void 0);
    }
    if (error) {
        return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("mediaObjectMessage"), { children: "Error loading content" }), void 0), children] }, void 0));
    }
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("mediaLoader"), { children: "Loading..." }), void 0), children] }, void 0));
};
exports.MediaLoader = MediaLoader;
