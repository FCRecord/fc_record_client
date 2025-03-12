import React from "react";

import * as S from "../CustomTable.style";
import { PaginationNumberProps } from "../CustomTable.type";

const PaginationNumber = ({
  page,
  isActive,
  handleClick,
}: PaginationNumberProps) => {
  return (
    <S.PageNumber isActive={isActive} onClick={handleClick}>
      {page}
    </S.PageNumber>
  );
};

export default PaginationNumber;
