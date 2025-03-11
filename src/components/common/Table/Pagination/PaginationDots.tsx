import { useState } from "react";

import Image from "next/image";
import { PaginationDotsProps } from "../CustomTable.type";
import { firstPageOnChange, LastPageOnChange } from "../CustomTable.hook";

const PaginationDots = ({
  type,
  setCurrent,
  totalPage,
}: PaginationDotsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultSrc = "/dots.png";
  const hoverSrc =
    type === "dots-left" ? "/double-arrow-left.png" : "/double-arrow-right.png";

  return (
    <Image
      src={isHovered ? hoverSrc : defaultSrc}
      width={13}
      height={13}
      alt="..."
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (type === "dots-left") {
          firstPageOnChange(setCurrent);
        } else {
          LastPageOnChange(totalPage, setCurrent);
        }
      }}
    />
  );
};

export default PaginationDots;
