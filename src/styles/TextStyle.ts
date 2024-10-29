import { css } from "styled-components";

export const TEXT = {
  black1_bold_1_5vh: css`
    font-family: "Noto Sans", sans-serif;
    font-weight: 800;
    color: var(--black-1);
    font-size: 1.5vh;
  `,
} as const;

export type TextKey = keyof typeof TEXT;
