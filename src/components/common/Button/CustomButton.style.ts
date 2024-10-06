import Image from "next/image";
import styled, { css } from "styled-components";

import { Variant } from "./CustomButton.type";

export const Button = styled.button<{
  $variant: Variant;
  $isLoading?: boolean;
}>`
  height: 28px;
  padding: 0 12px;

  border: none;
  border-radius: 5px;

  line-height: 1;
  white-space: nowrap;

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  ${({ $variant }) => getVariantStyle($variant)}

  ${({ $isLoading, $variant }) =>
    $isLoading &&
    css`
      background-color: ${getTransparentBackground($variant)};
      pointer-events: none;
    `}

  &:hover {
    ${({ $variant }) => getHoverStyle($variant)}
  }
`;

export const SpinnerWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerImage = styled(Image)`
  margin-right: 10px;
  animation: spinner infinite 1s forwards;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const getVariantStyle = (variant: Variant) => {
  switch (variant) {
    case "default":
      return css`
        background-color: #e0e0e0; /* Light gray */
      `;
    case "primary":
      return css`
        background-color: #1e90ff; /* Dodger Blue */
      `;
    case "secondary":
      return css`
        background-color: #87cefa; /* Light Sky Blue */
      `;
    case "success":
      return css`
        background-color: #32cd32; /* Lime Green */
      `;
    case "danger":
      return css`
        background-color: #ff6347; /* Tomato */
      `;
    default:
      return css`
        background-color: #e0e0e0; /* 기본 스타일 설정 */
      `;
  }
};

const getHoverStyle = (variant: Variant) => {
  switch (variant) {
    case "default":
      return css`
        background-color: #b0b0b0; /* Darker gray */
      `;
    case "primary":
      return css`
        background-color: #1c86ee; /* Dodger Blue hover */
      `;
    case "secondary":
      return css`
        background-color: #4682b4; /* Steel Blue */
      `;
    case "success":
      return css`
        background-color: #228b22; /* Forest Green */
      `;
    case "danger":
      return css`
        background-color: #ff4500; /* Orange Red */
      `;
    default:
      return css`
        background-color: #b0b0b0; /* 기본 hover 스타일 */
      `;
  }
};

const getTransparentBackground = (variant: Variant) => {
  switch (variant) {
    case "default":
      return `rgba(224, 224, 224, 0.6)`;
    case "primary":
      return `rgba(30, 144, 255, 0.6)`;
    case "secondary":
      return `rgba(135, 206, 250, 0.6)`;
    case "success":
      return `rgba(50, 205, 50, 0.6)`;
    case "danger":
      return `rgba(255, 99, 71, 0.6)`;
    default:
      return `rgba(224, 224, 224, 0.6)`;
  }
};
