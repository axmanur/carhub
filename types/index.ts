import { MouseEventHandler } from "react";

export interface CustomeBottomProbs {
    title : string;
    containerStyle? :string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

}
export interface CustomeFilterProbs {
    title : string;

}
export interface SearchManuFacturedProbs {
    manuFacturer : string;
    setmanuFacturer : (manuFacturer:string)=> void;

}