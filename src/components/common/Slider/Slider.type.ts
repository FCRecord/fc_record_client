import { Dispatch, SetStateAction } from "react";

export type ThumbType = "firstThumb" | "secondThumb" | null;

export type SliderType = "none" | "min" | "max";

export type setDraggingType = Dispatch<SetStateAction<ThumbType>>;

export interface handleMouseDownProps {
  ThumbType: ThumbType;
  setDragging: setDraggingType;
}

export interface getLeftProps {
  type: SliderType;
  firstThumbPosition: number;
  minValue: number;
  maxValue: number;
}

export interface getWidthProps extends getLeftProps {
  secondThumbPosition: number;
}

export interface SliderProps {
  type: SliderType;
  firstThumbPosition: number;
  secondThumbPosition: number;
  setFirstThumbPosition: Dispatch<SetStateAction<number>>;
  setSecondThumbPosition: Dispatch<SetStateAction<number>>;
  minValue: number;
  maxValue: number;
}
