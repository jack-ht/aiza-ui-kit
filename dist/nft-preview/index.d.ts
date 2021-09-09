/// <reference types="react" />
import { NFTPreview } from "./NFTPreview";
declare const PreviewComponents: {
    MediaThumbnail: ({ getContentData, }: import("../utils/getContentDataOptions").GetContentDataType) => JSX.Element;
    PricingComponent: ({ showPerpetual, }: {
        showPerpetual?: boolean | undefined;
    }) => JSX.Element;
};
export { NFTPreview, PreviewComponents };
