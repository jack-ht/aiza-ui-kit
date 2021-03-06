"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSyncRef = void 0;
const react_1 = require("react");
/**
 * Helper function to sync forwardRefs to object refs.
 */
function useSyncRef(source, target) {
    (0, react_1.useCallback)(() => {
        if (source && source.current && target) {
            if (typeof target === "function") {
                target(source.current);
            }
            else {
                target.current = source.current;
            }
        }
    }, [source, target]);
}
exports.useSyncRef = useSyncRef;
