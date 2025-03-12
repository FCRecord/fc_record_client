import React from "react";

import Image from "next/image";
import * as S from "../CustomTable.style";
import { PaginationButtonProps } from "../CustomTable.type";

const PaginationButton = ({
  onClick,
  disabled,
  type,
}: PaginationButtonProps) => {
  const imgSrc = type === "prev" ? "/arrow-left.png" : "/arrow-right.png";
  const altText = type === "prev" ? "이전" : "다음";

  return (
    <S.PaginationButton disabled={disabled} onClick={onClick}>
      <Image src={imgSrc} width={13} height={13} alt={altText} />
    </S.PaginationButton>
  );
};

export default PaginationButton;
