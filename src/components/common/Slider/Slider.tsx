import React, { useState, useRef, useCallback, useEffect } from "react";

import * as S from "./Slider.style";
import { handleMouseDown, handleMouseUp, getLeft, getWidth } from "./useSlider";
import { ThumbType, SliderProps } from "./Slider.type";

const Slider = ({
  type,
  minValue,
  maxValue,
  firstThumbPosition,
  setFirstThumbPosition,
  secondThumbPosition,
  setSecondThumbPosition,
}: SliderProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState<ThumbType>(null);

  const handleMouseMove = useCallback(
    (event: globalThis.MouseEvent) => {
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
        if (dragging === "firstThumb") {
          setFirstThumbPosition(
            Math.floor(Math.max(clampedPosition, minValue))
          );
        }
      } else if (type === "min") {
        if (dragging === "firstThumb") {
          setFirstThumbPosition(
            Math.floor(Math.min(clampedPosition, maxValue))
          );
        }
      } else {
        if (dragging === "firstThumb") {
          setFirstThumbPosition(
            Math.floor(
              Math.min(clampedPosition, secondThumbPosition ?? maxValue)
            )
          );
        }
        if (dragging === "secondThumb") {
          setSecondThumbPosition?.(
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
    setFirstThumbPosition(minValue);
    if (type === "none") {
      setSecondThumbPosition?.(maxValue);
    }
  }, [type]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", () => handleMouseUp(setDragging));
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", () => handleMouseUp(setDragging));
    };
  }, [handleMouseMove]);

  return (
    <S.SliderContainer>
      <S.Track ref={trackRef}>
        <S.Thumb
          position={
            ((firstThumbPosition - minValue) / (maxValue - minValue)) * 100
          }
          onMouseDown={handleMouseDown({
            ThumbType: "firstThumb",
            setDragging,
          })}
        >
          <S.Label>{firstThumbPosition}</S.Label>
        </S.Thumb>
        <S.Range
          left={getLeft({
            type,
            firstThumbPosition,
            minValue,
            maxValue,
          })}
          width={getWidth({
            type,
            firstThumbPosition,
            secondThumbPosition,
            minValue,
            maxValue,
          })}
        />
        {type === "none" && secondThumbPosition !== undefined && (
          <S.Thumb
            position={
              ((secondThumbPosition - minValue) / (maxValue - minValue)) * 100
            }
            onMouseDown={handleMouseDown({
              ThumbType: "secondThumb",
              setDragging,
            })}
          >
            <S.Label>{secondThumbPosition}</S.Label>
          </S.Thumb>
        )}
      </S.Track>
    </S.SliderContainer>
  );
};

export default Slider;
