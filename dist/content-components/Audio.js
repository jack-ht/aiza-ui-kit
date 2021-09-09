"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audio = exports.AudioRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useSyncRef_1 = require("../utils/useSyncRef");
const MediaLoader_1 = require("./MediaLoader");
const RendererConfig_1 = require("./RendererConfig");
const FakeWaveformCanvas = ({ audioRef, uri }) => {
    const canvasRef = (0, react_1.useRef)(null);
    const [width, setWidth] = (0, react_1.useState)();
    const updateWidth = (0, react_1.useCallback)(() => {
        var _a, _b, _c;
        const newWidth = (_c = (_b = (_a = canvasRef.current) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect()) === null || _c === void 0 ? void 0 : _c.width;
        if (newWidth && newWidth !== width) {
            setWidth(newWidth);
        }
    }, [canvasRef.current]);
    (0, react_1.useEffect)(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, [updateWidth]);
    const uriEntropy = (0, react_1.useMemo)(() => uri
        .split("")
        .reduce((last, char) => last ^ (last + char.charCodeAt(0)), 0), [uri]);
    (0, react_1.useEffect)(() => {
        updateCanvasLines();
        const updateInterval = setInterval(updateCanvasLines, 1000);
        return () => clearInterval(updateInterval);
    }, [width]);
    const seekAudio = (0, react_1.useCallback)((evt) => {
        if (audioRef.current && canvasRef.current && width) {
            const position = (evt.clientX - canvasRef.current.getBoundingClientRect().left) /
                width;
            audioRef.current.currentTime = position * audioRef.current.duration;
            audioRef.current.play();
            updateCanvasLines();
        }
    }, [audioRef.current, width]);
    const height = 200;
    const updateCanvasLines = (0, react_1.useCallback)(() => {
        if (canvasRef.current && width && audioRef.current) {
            const context = canvasRef.current.getContext("2d");
            if (!context) {
                return;
            }
            context.clearRect(0, 0, width, height);
            for (let i = 0; i < width; i += 5) {
                const sinRnd = Math.sin(i + uriEntropy) * 10000;
                const lineHeight = Math.floor(Math.min(Math.sin((i / width) * 0.2) +
                    2 * (sinRnd - Math.floor(sinRnd)) * 40, height));
                if (audioRef.current.currentTime / audioRef.current.duration >
                    i / width) {
                    context.fillStyle = "#333";
                }
                else {
                    context.fillStyle = "#999";
                }
                context.fillRect(i, (height - lineHeight) / 2, 2, lineHeight);
            }
        }
    }, [canvasRef.current, audioRef.current, width]);
    return ((0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, height: height, width: width, onClick: seekAudio }, void 0));
};
exports.AudioRenderer = (0, react_1.forwardRef)(({ request, getStyles, a11yIdPrefix }, ref) => {
    var _a, _b;
    const uri = ((_a = request.media.content) === null || _a === void 0 ? void 0 : _a.uri) || ((_b = request.media.animation) === null || _b === void 0 ? void 0 : _b.uri);
    const { props, loading, error } = (0, MediaLoader_1.useMediaObjectProps)({
        uri,
        request,
        a11yIdPrefix,
        getStyles,
    });
    const audioRef = (0, react_1.useRef)(null);
    (0, useSyncRef_1.useSyncRef)(audioRef, ref);
    const [playing, setPlaying] = (0, react_1.useState)(false);
    const wrapper = (0, react_1.useRef)();
    const togglePlay = (0, react_1.useCallback)((evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        if (audioRef.current) {
            if (playing) {
                audioRef.current.pause();
            }
            else {
                audioRef.current.play();
            }
        }
    }, [audioRef.current, playing]);
    (0, react_1.useEffect)(() => {
        if (!audioRef.current) {
            return;
        }
        if (playing) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [audioRef.current, playing]);
    const playingText = playing ? "Pause" : "Play";
    return ((0, jsx_runtime_1.jsx)(MediaLoader_1.MediaLoader, Object.assign({ getStyles: getStyles, loading: loading, error: error }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: wrapper }, getStyles("mediaAudioWrapper"), { children: [!loading && ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ "aria-live": "polite", onClick: togglePlay, title: playingText }, getStyles("mediaPlayButton", { playing }), { children: playingText }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("mediaAudioWaveform"), { children: (0, jsx_runtime_1.jsx)(FakeWaveformCanvas, { uri: uri || "", audioRef: audioRef }, void 0) }), void 0)] }, void 0)), (0, jsx_runtime_1.jsx)("audio", Object.assign({ loop: true, ref: audioRef, preload: "auto", playsInline: true, onPlay: () => setPlaying(true), onPause: () => setPlaying(false) }, props, { onLoadedData: props.onLoad, onCanPlayThrough: props.onLoad, onLoad: undefined }), void 0)] }), void 0) }), void 0));
});
exports.Audio = {
    getRenderingPreference(request) {
        var _a, _b, _c, _d;
        if ((_b = (_a = request.media.content) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.startsWith("audio")) {
            return RendererConfig_1.RenderingPreference.PRIORITY;
        }
        if ((_d = (_c = request.media.animation) === null || _c === void 0 ? void 0 : _c.type) === null || _d === void 0 ? void 0 : _d.startsWith("audio")) {
            return RendererConfig_1.RenderingPreference.PRIORITY;
        }
        return RendererConfig_1.RenderingPreference.INVALID;
    },
    render: exports.AudioRenderer,
};
