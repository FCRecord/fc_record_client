import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import * as S from "./Header.style";
import SideMenu from "./SideMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <S.Overlay onClick={toggleMenu} />
            <SideMenu toggleMenu={toggleMenu} />
          </>
        )}
      </AnimatePresence>
      <S.Wrapper>
        <S.SideMenuWrapper onClick={toggleMenu}>
          <Image src={"/icon-menu.png"} layout="fill" alt="로고" />
        </S.SideMenuWrapper>
        <S.LogoWrapper>
          <Image src={"/Logo.png"} layout="fill" alt="로고" />
        </S.LogoWrapper>
        <S.loginBtn>Login</S.loginBtn>
      </S.Wrapper>
    </>
  );
};

export default Header;
