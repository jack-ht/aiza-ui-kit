/// <reference types="react" />
import { GetContentDataType } from "../utils/getContentDataOptions";
declare type MediaFullProps = GetContentDataType & {
    a11yIdPrefix?: string;
};
export declare const MediaFull: ({ a11yIdPrefix, getContentData, }: MediaFullProps) => JSX.Element;
export {};
