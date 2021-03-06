"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountdownDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function getNumber(time) {
    if (typeof time === "string") {
        return parseInt(time, 10);
    }
    return time;
}
const CountdownDisplay = (props) => {
    const getTimeLeft = (to, from) => {
        if (!from) {
            return null;
        }
        let difference = to - from;
        if (difference < 0) {
            difference = 0;
        }
        return {
            d: Math.floor(difference / (3600 * 24)),
            h: Math.floor(difference / 3600) % 24,
            m: Math.floor((difference / 60) % 60),
            s: Math.floor(difference % 60),
        };
    };
    const [timeLeft, setTimeLeft] = (0, react_1.useState)(getTimeLeft(getNumber(props.to), getNumber(props.from === undefined ? new Date().getTime() / 1000 : props.from)));
    const updateTimeLeft = (0, react_1.useCallback)(() => {
        setTimeLeft(getTimeLeft(getNumber(props.to), getNumber(props.from === undefined ? new Date().getTime() / 1000 : props.from)));
    }, [props.to, props.from]);
    (0, react_1.useEffect)(() => {
        const checkTimeout = setInterval(updateTimeLeft, 1000);
        return () => {
            clearInterval(checkTimeout);
        };
    }, []);
    if (!timeLeft) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0);
    }
    const timeString = [
        [timeLeft.d, "d"],
        [timeLeft.h, "h"],
        [timeLeft.m, "m"],
        [timeLeft.s, "s"],
    ]
        .filter((n) => n !== null)
        .reduce((lastString, [number, postfix]) => {
        if (!lastString.length && number === 0) {
            return "";
        }
        return `${lastString} ${number}${postfix}`;
    }, "");
    return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: timeString || "0s" }, void 0);
};
exports.CountdownDisplay = CountdownDisplay;
