import Image from "next/image";
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Wrapper>
      <div>menu</div>
      <S.LogoWrapper>
        <Image src={"/Logo.png"} layout="fill" alt="로고" />
      </S.LogoWrapper>
      <div>login</div>
    </S.Wrapper>
  );
};

export default Header;
