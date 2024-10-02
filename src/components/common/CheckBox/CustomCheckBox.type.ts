import { ImageProps } from "next/image";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { CSSProperties } from "styled-components";

type CheckBoxStyles = {
  wrapper?: CSSProperties;
  imageWrapper?: CSSProperties;
};

export type CheckBoxProps = {
  label?: ReactNode;
  styles?: CheckBoxStyles;
  imageSrc?: ImageProps["src"];
  imagePropsWithoutSrc?: Omit<ImageProps, "src">;
  gap?: number;
} & ComponentPropsWithoutRef<"input">;
