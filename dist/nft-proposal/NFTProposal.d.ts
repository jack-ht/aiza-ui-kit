/// <reference types="react" />
import { NFTDataProviderProps } from "../context/NFTDataProvider";
import { ProposalActionListProps } from "./ProposalActionList";
declare type NFTProposalProps = Omit<NFTDataProviderProps, "children"> & {
    actionConfiguration?: ProposalActionListProps;
};
export declare const NFTProposal: ({ actionConfiguration, ...wrapperProps }: NFTProposalProps) => JSX.Element;
export {};
