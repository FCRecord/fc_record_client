import { CARD_LAYOUTS } from "./MainCard.const";
import { CSSProperties } from "react";

export type CardLayout = (typeof CARD_LAYOUTS)[number];

export type MainCardProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
  CardLayout?: CardLayout;
  style?: CSSProperties;
};
