import { css } from "styled-components";

export const TEXT = {
  black1_bold_1_5vh: css`
    font-family: "Noto Sans", sans-serif;
    font-weight: 800;
    color: var(--black-1);
    font-size: 1.5vh;
  `,
  black1_bold_15px: css`
    font-weight: 700;
    color: var(--black-1);
    font-size: 15px;
  `,
  black1_12px: css`
    font-family: "Noto Sans", sans-serif;
    color: var(--black-1);
    font-size: 12px;
  `,
} as const;

export type TextKey = keyof typeof TEXT;
