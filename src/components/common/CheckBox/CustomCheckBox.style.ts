import styled, { css } from "styled-components";

export const Wrapper = styled.label<{ $gap?: number; $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $gap }) => {
    return $gap !== undefined ? `${$gap}px` : `10px`;
  }};
  line-height: 1;
  cursor: ${({ $disabled }) => {
    return $disabled ? "not-allowed" : "pointer";
  }};
`;

export const CheckImageWrapper = styled.div<{
  $checked: boolean;
  $disabled: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $checked, $disabled }) => {
    if ($disabled) {
      return css`
        border: 1px solid black;
        background-color: var(--gray-1);
      `;
    }

    return $checked
      ? css`
          border: 1px solid black;
          background-color: var(--orange-1);
        `
      : css`
          border: 1px solid black;
          background-color: var(--white-1);
        `;
  }}
`;
