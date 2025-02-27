import { Dispatch, SetStateAction } from "react";

export type ThumbType = "firstThumb" | "secondThumb" | null;

export type SliderType = "none" | "min" | "max";

export interface SliderProps {
  type: SliderType;
  firstThumbPosition: number;
  secondThumbPosition: number;
  setFirstThumbPosition: Dispatch<SetStateAction<number>>;
  setSecondThumbPosition: Dispatch<SetStateAction<number>>;
  minValue: number;
  maxValue: number;
}
