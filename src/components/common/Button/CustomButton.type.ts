import { ComponentPropsWithoutRef } from "react";

import { VARIANTS } from "./CustomButton.const";

export type ButtonProps = {
  variant?: Variant;
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export type Variant = (typeof VARIANTS)[number];
