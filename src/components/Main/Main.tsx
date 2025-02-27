import React, { useState } from "react";

import * as S from "./Main.style";

import Slider from "../common/Slider";

const Main = () => {
  const [firstThumbPosition, setFirstThumbPosition] = useState(1);
  const [secondThumbPosition, setSecondThumbPosition] = useState(30);
  return (
    <S.container>
      {/* TODO: 해당슬라이더 마크업 작업 완료후 삭제 예정 */}
      <Slider
        type="none"
        minValue={1}
        maxValue={50}
        firstThumbPosition={firstThumbPosition}
        setFirstThumbPosition={setFirstThumbPosition}
        secondThumbPosition={secondThumbPosition}
        setSecondThumbPosition={setSecondThumbPosition}
      />
    </S.container>
  );
};

export default Main;
