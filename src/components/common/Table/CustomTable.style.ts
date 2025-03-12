import styled from "styled-components";

import { TEXT } from "@/styles/TextStyle";

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTr = styled.tr`
  &:hover {
    background-color: var(--gray-4);
  }
`;

export const StyledTh = styled.th`
  padding: 12px;
  background: var(--gray-3);
  border-bottom: 1px solid var(--gray-4);
  ${TEXT.black1_12px}
  text-align: left;
`;

export const StyledTd = styled.td`
  padding: 12px;
  border-bottom: 1px solid var(--gray-4);
  ${TEXT.black1_12px}
`;

export const EmptyRow = styled.td`
  padding: 16px;
  text-align: center;
  ${TEXT.black1_12px}
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background: var(--white-1);
  ${TEXT.black1_12px}
`;

export const PaginationButton = styled.button`
  width: 13px;
  height: 13px;
  border: none !important;
  outline: none;
  background: var(--white-1);
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.button<{ isActive: boolean }>`
  width: 25px;
  height: 25px;
  border: none;
  color: ${({ isActive }) => (isActive ? "var(--blue-2)" : "var(--black-1)")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white-1);

  &:hover {
    color: var(--orange-1);
  }
`;
