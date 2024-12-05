import React from "react";
import * as S from "./MainCard.style";
import { MainCardProps } from "./MainCard.type";

const MainCard = ({
  backgroundColor,
  CardLayout,
  style,
  children,
}: MainCardProps) => {
  return (
    <S.container
      $backgroundColor={backgroundColor}
      $CardLayout={CardLayout}
      style={style}
    >
      {children}
    </S.container>
  );
};

export default MainCard;
