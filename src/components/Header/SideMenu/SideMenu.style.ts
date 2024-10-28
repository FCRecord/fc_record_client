import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  background-color: #212121;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  border-bottom: solid 1px white;
  padding-left: 20px;
  background-color: #212121;
`;

export const closeWrapper = styled.div`
  position: relative;
  width: 12%;
  height: 40%;
  cursor: pointer;
`;
