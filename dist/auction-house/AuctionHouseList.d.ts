/// <reference types="react" />
import { AuctionResultType } from "@htsoft/reactjs-hooks";
declare type AuctionHouseProps = {
    curatorIds: string[];
    approved?: boolean | null;
    onClick?: (evt: React.MouseEvent<HTMLElement>, result: AuctionResultType) => void;
};
export declare const AuctionHouseList: ({ curatorIds, approved, onClick, }: AuctionHouseProps) => JSX.Element;
export {};
