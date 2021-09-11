"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaConfiguration = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const merge_anything_1 = require("merge-anything");
const content_components_1 = require("../content-components");
const MediaContext_1 = require("./MediaContext");
const MediaConfiguration = ({ networkId = reactjs_hooks_1.Networks.MAINNET, style = {}, children, strings = {}, renderers, }) => {
    const superContext = (0, react_1.useContext)(MediaContext_1.MediaContext);
    if (!renderers) {
        renderers = content_components_1.MediaRendererDefaults;
    }
    let newContext = {
        // TODO(iain): Fix typing
        style: (0, merge_anything_1.merge)(superContext.style, style),
        strings: (0, merge_anything_1.merge)(superContext.strings, strings),
        renderers,
        networkId,
    };
    return ((0, jsx_runtime_1.jsx)(MediaContext_1.MediaContext.Provider, Object.assign({ value: newContext }, { children: (0, jsx_runtime_1.jsx)(reactjs_hooks_1.NFTFetchConfiguration, Object.assign({ networkId: networkId }, { children: children }), void 0) }), void 0));
};
exports.MediaConfiguration = MediaConfiguration;
