import styled from "styled-components";

export const container = styled.div<{
  $backgroundColor?: string;
  $CardLayout?: "full" | "half";
}>`
  width: ${(props) => (props.$CardLayout === "half" ? "42.5%" : "100%")};
  height: 100%;
  border-radius: 20px;
  padding: 10px;
  background-color: ${(props) => props.$backgroundColor || "white"};
`;
