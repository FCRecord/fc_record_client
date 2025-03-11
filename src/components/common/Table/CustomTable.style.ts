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
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fff;
  ${TEXT.black1_12px}

  button {
    padding: 5px 10px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
