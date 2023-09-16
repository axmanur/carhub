import { MouseEventHandler } from "react";

export interface CustomeBottomProbs {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
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
export interface CardProbs {
    city_mpg:number;
    class:String;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:String;
    fuel_type:String;
    highway_mpg:number;
    make:String;
    model:String;
    transmission:String;
    year:number;
}