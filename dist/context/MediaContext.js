"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaContext = void 0;
const react_1 = require("react");
const reactjs_hooks_1 = require("@htsoft/reactjs-hooks");
const strings_1 = require("../constants/strings");
const style_1 = require("../constants/style");
const content_components_1 = require("../content-components");
exports.MediaContext = (0, react_1.createContext)({
    networkId: reactjs_hooks_1.Networks.MAINNET,
    style: style_1.Style,
    strings: strings_1.Strings,
    renderers: content_components_1.MediaRendererDefaults,
});
