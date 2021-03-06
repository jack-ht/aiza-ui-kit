"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useA11yIdPrefix = void 0;
const react_1 = require("react");
let idCounter = 0;
const useA11yIdPrefix = (text) => (0, react_1.useState)(() => `aiza-a11y-${idCounter++}-${text}`)[0];
exports.useA11yIdPrefix = useA11yIdPrefix;
