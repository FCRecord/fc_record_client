import Image from "next/image";

import * as S from "./SideMenu.style";

type SideMenuProps = {
  toggleMenu: () => void;
};

const SideMenu = ({ toggleMenu }: SideMenuProps) => {
  return (
    <S.Wrapper
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <S.TopWrapper>
        <S.closeWrapper onClick={toggleMenu}>
          <Image src={"/close-button.png"} layout="fill" alt="로고" />
        </S.closeWrapper>
      </S.TopWrapper>
    </S.Wrapper>
  );
};

export default SideMenu;
