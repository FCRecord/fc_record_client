import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  MouseEvent,
} from "react";

import * as S from "./Slider.style";

const Slider = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [type, setType] = useState("max");
  const [dragging, setDragging] = useState<"thumb1" | "thumb2" | null>(null);
  const [thumbPosition1, setThumbPosition1] = useState(0); // 임시값 props로 받아올 예정
  const [thumbPosition2, setThumbPosition2] = useState(60); // 임시값 props로 받아올 예정

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!dragging || !trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const newPosition = ((event.clientX - rect.left) / rect.width) * 100;
      const clampedPosition = Math.min(Math.max(newPosition, 0), 100);

      if (type === "max") {
        if (dragging === "thumb2") {
          setThumbPosition2(Math.max(clampedPosition, thumbPosition1));
        }
      } else if (type === "min") {
        if (dragging === "thumb1") {
          setThumbPosition1(Math.min(clampedPosition, thumbPosition2));
        }
      } else {
        if (dragging === "thumb1") {
          setThumbPosition1(Math.min(clampedPosition, thumbPosition2));
        }
        if (dragging === "thumb2") {
          setThumbPosition2(Math.max(clampedPosition, thumbPosition1));
        }
      }
    },
    [dragging, type, thumbPosition1, thumbPosition2]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove]);

  const handleMouseDown = (thumb: "thumb1" | "thumb2") => () => {
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
        return thumbPosition1;
    }
  };

  const getWidth = () => {
    switch (type) {
      case "max":
        return thumbPosition2;
      case "min":
        return thumbPosition1 - thumbPosition1;
      default:
        return thumbPosition2 - thumbPosition1;
    }
  };

  return (
    <S.SliderContainer>
      <S.Track ref={trackRef}>
        {type !== "max" && (
          <S.Thumb
            position={thumbPosition1}
            onMouseDown={handleMouseDown("thumb1")}
          />
        )}
        <S.Range left={getLeft()} width={getWidth()} />
        {type !== "min" && (
          <S.Thumb
            position={thumbPosition2}
            onMouseDown={handleMouseDown("thumb2")}
          />
        )}
      </S.Track>
    </S.SliderContainer>
  );
};

export default Slider;
