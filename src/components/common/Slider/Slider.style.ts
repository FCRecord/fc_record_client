import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Track = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background-color: var(--orange-1);
  border-radius: 3px;
`;

export const Range = styled.div<{ left: number; width: number }>`
  position: absolute;
  height: 6px;
  background-color: var(--blue-1);
  border-radius: 3px;
  left: ${({ left }) => left}%;
  width: ${({ width }) => width}%;
`;

export const Thumb = styled.div<{ position: number }>`
  position: absolute;
  top: -6px;
  width: 16px;
  height: 16px;
  background-color: white;
  border: 2px solid var(--blue-1);
  border-radius: 50%;
  cursor: pointer;
  left: ${({ position }) => position}%;
  transform: translateX(-50%);
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  z-index: 999;
`;
