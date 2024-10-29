import styled from "styled-components";
import { motion } from "framer-motion";

import { TEXT } from "@/styles/TextStyle";
export const Wrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  background-color: #ffffff;
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 9%;
  height: 60%;
`;

export const SideMenuWrapper = styled.div`
  position: relative;
  width: 2%;
  height: 40%;
  cursor: pointer;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const loginBtn = styled.button`
  min-height: 50%;
  min-width: 5%;
  background-color: white;
  border: solid 2px #212121;
  border-radius: 25px;
  cursor: pointer;
  ${TEXT.black1_bold_1_5vh}
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--black-1);
    color: var(--white-1);
  }
`;
