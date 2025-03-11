import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTh = styled.th`
  padding: 12px;
  background: #f5f5f5;
  border-bottom: 2px solid #ddd;
  text-align: left;
`;

export const StyledTd = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const EmptyRow = styled.td`
  padding: 16px;
  text-align: center;
  font-size: 14px;
  color: #888;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fff;
  border-top: 1px solid #ddd;

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
