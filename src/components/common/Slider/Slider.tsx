import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  MouseEvent,
} from "react";
import * as S from "./Slider.style";
import { ThumbType, SliderType, SliderProps } from "./Slider.type";

const Slider = ({
  type = "none",
  minValue = 1,
  maxValue = 30,
}: SliderProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState<ThumbType>(null);
  const [firstThumbPosition, setFirstThumbPosition] = useState(minValue);
  const [secondThumbPosition, setSecondThumbPosition] = useState(maxValue);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!dragging || !trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const newPosition =
        ((event.clientX - rect.left) / rect.width) * (maxValue - minValue) +
        minValue;
      const clampedPosition = Math.min(
        Math.max(newPosition, minValue),
        maxValue
      );

      if (type === "max") {
        if (dragging === "secondThumb") {
          setSecondThumbPosition(
            Math.floor(Math.max(clampedPosition, firstThumbPosition))
          );
        }
      } else if (type === "min") {
        if (dragging === "firstThumb") {
          setFirstThumbPosition(
            Math.floor(Math.min(clampedPosition, secondThumbPosition))
          );
        }
      } else {
        if (dragging === "firstThumb") {
          setFirstThumbPosition(
            Math.floor(Math.min(clampedPosition, secondThumbPosition))
          );
        }
        if (dragging === "secondThumb") {
          setSecondThumbPosition(
            Math.floor(Math.max(clampedPosition, firstThumbPosition))
          );
        }
      }
    },
    [
      dragging,
      type,
      firstThumbPosition,
      secondThumbPosition,
      minValue,
      maxValue,
    ]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove]);

  const handleMouseDown = (thumb: ThumbType) => () => {
    setDragging(thumb);
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const getLeft = () => {
    switch (type) {
      case "max":
        return 0;
      case "min":
        return 100;
      default:
        return ((firstThumbPosition - minValue) / (maxValue - minValue)) * 100;
    }
  };

  const getWidth = () => {
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

  return (
    <S.SliderContainer>
      <S.Track ref={trackRef}>
        {type !== "max" && (
          <S.Thumb
            position={
              ((firstThumbPosition - minValue) / (maxValue - minValue)) * 100
            }
            onMouseDown={handleMouseDown("firstThumb")}
          >
            <S.Label>{firstThumbPosition}</S.Label>
          </S.Thumb>
        )}
        <S.Range left={getLeft()} width={getWidth()} />
        {type !== "min" && (
          <S.Thumb
            position={
              ((secondThumbPosition - minValue) / (maxValue - minValue)) * 100
            }
            onMouseDown={handleMouseDown("secondThumb")}
          >
            <S.Label>{secondThumbPosition}</S.Label>
          </S.Thumb>
        )}
      </S.Track>
    </S.SliderContainer>
  );
};

export default Slider;
