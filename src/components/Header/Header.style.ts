import styled from "styled-components";
import { motion } from "framer-motion";

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
