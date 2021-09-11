/// <reference types="react" />
import { NFTPreview } from "./NFTPreview";
declare const PreviewComponents: {
    MediaThumbnail: () => JSX.Element;
    PricingComponent: ({ showPerpetual, }: {
        showPerpetual?: boolean | undefined;
    }) => JSX.Element;
};
export { NFTPreview, PreviewComponents };
