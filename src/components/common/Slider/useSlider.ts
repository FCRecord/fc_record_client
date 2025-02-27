import {
  handleMouseDownProps,
  setDraggingType,
  getLeftProps,
  getWidthProps,
} from "./Slider.type";

export const handleMouseDown =
  ({ ThumbType, setDragging }: handleMouseDownProps) =>
  () => {
    setDragging(ThumbType);
  };

export const handleMouseUp = (setDragging: setDraggingType) => {
  setDragging(null);
};

export const getLeft = ({
  type,
  firstThumbPosition,
  minValue,
  maxValue,
}: getLeftProps) => {
  switch (type) {
    case "max":
      return 0;
    case "min":
      return 100;
    default:
      return ((firstThumbPosition - minValue) / (maxValue - minValue)) * 100;
  }
};

export const getWidth = ({
  firstThumbPosition,
  secondThumbPosition,
  minValue,
  maxValue,
  type,
}: getWidthProps) => {
  switch (type) {
    case "max":
      return ((secondThumbPosition - minValue) / (maxValue - minValue)) * 100;
    case "min":
      return ((firstThumbPosition - minValue) / (maxValue - minValue)) * 100;
    default:
      return (
        ((secondThumbPosition - firstThumbPosition) / (maxValue - minValue)) *
        100
      );
  }
};
