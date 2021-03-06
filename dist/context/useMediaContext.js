"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaContext = void 0;
const react_1 = require("react");
const css_1 = require("@emotion/css");
const MediaContext_1 = require("./MediaContext");
function useMediaContext() {
    const mediaContext = (0, react_1.useContext)(MediaContext_1.MediaContext);
    const getStyles = (themeKey, flags = {}) => {
        if (!(themeKey in mediaContext.style.styles)) {
            throw new Error(`"${themeKey}" not found in [${Object.keys(mediaContext.style.styles).join(", ")}]`);
        }
        const styles = mediaContext.style.styles[themeKey](mediaContext.style.theme, flags);
        return {
            className: `aiza-${themeKey} ${(0, css_1.css)(styles)}`,
        };
    };
    const getString = (stringName) => {
        return mediaContext.strings[stringName];
    };
    return { ...mediaContext, getString, getStyles };
}
exports.useMediaContext = useMediaContext;
