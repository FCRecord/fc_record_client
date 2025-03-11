import React from "react";

import * as S from "./CustomTable.style";
import { TableComponentProps } from "./CustomTable.type";

const CustomTable = <T,>({
  columns,
  dataSource,
  pagination,
  locale,
}: TableComponentProps<T>) => {
  return (
    <S.TableWrapper>
      <S.StyledTable>
        <thead>
          <tr>
            {columns.map((col) => (
              <S.StyledTh key={col.key}>{col.title}</S.StyledTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.length > 0 ? (
            dataSource.map((record, rowIndex) => (
              <S.StyledTr key={rowIndex}>
                {columns.map((col) => (
                  <S.StyledTd key={col.key}>
                    {col.render
                      ? col.render(record[col.dataIndex], record, rowIndex)
                      : String(record[col.dataIndex] ?? "")}
                  </S.StyledTd>
                ))}
              </S.StyledTr>
            ))
          ) : (
            <tr>
              <S.EmptyRow colSpan={columns.length}>
                {locale?.emptyText || "데이터가 없습니다."}
              </S.EmptyRow>
            </tr>
          )}
        </tbody>
      </S.StyledTable>
      {pagination && (
        <S.PaginationWrapper>
          <button
            disabled={pagination.current === 1}
            onClick={pagination.prevOnChange}
          >
            Prev
          </button>
          <span>
            {pagination.current} ... {Math.ceil(pagination.total!)}
          </span>
          <button
            disabled={pagination.current! >= pagination.total!}
            onClick={pagination.nextOnChange}
          >
            Next
          </button>
        </S.PaginationWrapper>
      )}
    </S.TableWrapper>
  );
};

export default CustomTable;
