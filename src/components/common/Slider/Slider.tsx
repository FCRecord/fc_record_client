import React from "react";

import * as S from "./Slider.style";

const Slider = () => {
  return (
    <S.SliderContainer>
      <S.Track>
        {/* 첫번째 Thumb는 Range의 left 값과 동일 */}
        <S.Thumb position={50}></S.Thumb>
        <S.Range left={50} width={10}></S.Range>
        {/* 두번째 Thumb는 Range의 width 값 + left값 */}
        <S.Thumb position={60}></S.Thumb>
      </S.Track>
    </S.SliderContainer>
  );
};

export default Slider;
