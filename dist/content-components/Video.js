"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = exports.VideoRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const MediaLoader_1 = require("./MediaLoader");
const RendererConfig_1 = require("./RendererConfig");
const Image_1 = require("./Image");
const useSyncRef_1 = require("../utils/useSyncRef");
const useA11yIdPrefix_1 = require("../utils/useA11yIdPrefix");
exports.VideoRenderer = (0, react_1.forwardRef)((props, ref) => {
    var _a, _b, _c, _d;
    const { getString, getStyles, request, a11yIdPrefix } = props;
    const [isPlaying, setIsPlaying] = (0, react_1.useState)(true);
    const [isMuted, setIsMuted] = (0, react_1.useState)(true);
    const [isFullScreen, setIsFullScreen] = (0, react_1.useState)(false);
    const video = (0, react_1.useRef)(null);
    const controlAriaId = (0, useA11yIdPrefix_1.useA11yIdPrefix)("video-renderer");
    const uri = request.renderingContext === "FULL"
        ? ((_a = request.media.animation) === null || _a === void 0 ? void 0 : _a.uri) || ((_b = request.media.content) === null || _b === void 0 ? void 0 : _b.uri)
        : ((_c = request.media.content) === null || _c === void 0 ? void 0 : _c.uri) || ((_d = request.media.animation) === null || _d === void 0 ? void 0 : _d.uri);
    const { props: mediaProps, loading, error, } = (0, MediaLoader_1.useMediaObjectProps)({
        uri,
        request,
        a11yIdPrefix,
        getStyles,
    });
    (0, useSyncRef_1.useSyncRef)(video, ref);
    (0, react_1.useEffect)(() => {
        const fullScreenCallback = () => {
            setIsFullScreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", fullScreenCallback);
        return () => {
            document.removeEventListener("fullscreenchange", fullScreenCallback);
        };
    }, []);
    const togglePlay = (0, react_1.useCallback)(() => {
        var _a;
        if (!video.current) {
            return;
        }
        if (video.current.paused) {
            video.current.play();
        }
        else {
            (_a = video.current) === null || _a === void 0 ? void 0 : _a.pause();
        }
    }, [video]);
    const openFullscreen = (0, react_1.useCallback)(() => {
        const elem = video.current;
        if (elem && elem.requestFullscreen) {
            setIsMuted(false);
            return elem.requestFullscreen();
        }
        // Thank Apple for this one :(. Needed for iOS
        // @ts-ignore
        if (elem && elem.webkitSetPresentationMode) {
            setIsMuted(false);
            // @ts-ignore
            return elem.webkitSetPresentationMode("fullscreen");
        }
        return;
    }, [video]);
    const onCanPlay = (0, react_1.useCallback)(() => {
        var _a;
        setIsPlaying(!((_a = video.current) === null || _a === void 0 ? void 0 : _a.paused));
    }, []);
    const toggleMute = (0, react_1.useCallback)(() => {
        if (!video.current) {
            return;
        }
        if (video.current.muted) {
            setIsMuted(false);
        }
        else {
            setIsMuted(true);
        }
    }, [video]);
    const playLoop = (0, react_1.useCallback)(() => {
        if (!video.current) {
            return;
        }
        video.current.currentTime = 0;
    }, [video.current]);
    const playingText = isPlaying
        ? getString("VIDEO_CONTROLS_PAUSE")
        : getString("VIDEO_CONTROLS_PLAY");
    // Fallback to rendering an image if loading the video fails
    if (error) {
        return (0, jsx_runtime_1.jsx)(Image_1.ImageRenderer, Object.assign({}, props), void 0);
    }
    return ((0, jsx_runtime_1.jsxs)(MediaLoader_1.MediaLoader, Object.assign({ getStyles: getStyles, loading: loading, error: error }, { children: [video.current && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ "aria-label": getString("VIDEO_CONTROLS_LABEL"), id: controlAriaId, tabIndex: "0", 
                // @ts-ignore Blur is kinda invalid but okay to be unsafe here.
                onMouseOut: (evt) => evt.target.blur() }, getStyles("mediaVideoControls", {
                isFullPage: request.renderingContext === "FULL",
            }), { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({}, getStyles("mediaFullscreenButton"), { "aria-pressed": isFullScreen ? "true" : "false", onClick: openFullscreen, title: getString("VIDEO_CONTROLS_FULLSCREEN") }, { children: getString("VIDEO_CONTROLS_FULLSCREEN") }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({}, getStyles("mediaPlayButton", { playing: isPlaying }), { "aria-live": "polite", onClick: togglePlay, title: playingText }, { children: playingText }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({}, getStyles("mediaMuteButton", { muted: isMuted }), { onClick: toggleMute, "aria-pressed": isMuted ? "false" : "true" }, { children: getString("VIDEO_CONTROLS_MUTE") }), void 0)] }), void 0)), (0, jsx_runtime_1.jsx)("video", Object.assign({}, mediaProps, { "aria-controls": controlAriaId, autoPlay: true, controls: isFullScreen, loop: true, muted: isMuted, onCanPlayThrough: onCanPlay, onEnded: playLoop, onLoadedData: mediaProps.onLoad, onPause: () => setIsPlaying(false), onPlay: () => setIsPlaying(true), playsInline: true, preload: "metadata", ref: video }), void 0)] }), void 0));
});
exports.Video = {
    getRenderingPreference: (request) => {
        var _a, _b, _c, _d;
        if ((_b = (_a = request.media.animation) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.startsWith("video/")) {
            return RendererConfig_1.RenderingPreference.PRIORITY;
        }
        if ((_d = (_c = request.media.content) === null || _c === void 0 ? void 0 : _c.type) === null || _d === void 0 ? void 0 : _d.startsWith("video/")) {
            return RendererConfig_1.RenderingPreference.PRIORITY;
        }
        return RendererConfig_1.RenderingPreference.INVALID;
    },
    render: exports.VideoRenderer,
};
