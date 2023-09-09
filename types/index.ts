import { MouseEventHandler } from "react";

export interface CustomeBottomProbs {
    title : string;
    containerStyle? :string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

}