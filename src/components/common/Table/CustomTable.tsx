import React from "react";

import Image from "next/image";
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
          <S.PaginationButton
            disabled={pagination.current === 1}
            onClick={pagination.prevOnChange}
          >
            <Image src={"/arrow-left.png"} width={13} height={13} alt="이전" />
          </S.PaginationButton>
          <span>
            {pagination.current} ... {Math.ceil(pagination.total!)}
          </span>
          <S.PaginationButton
            disabled={pagination.current! >= pagination.total!}
            onClick={pagination.nextOnChange}
          >
            <Image src={"/arrow-right.png"} width={13} height={13} alt="다음" />
          </S.PaginationButton>
        </S.PaginationWrapper>
      )}
    </S.TableWrapper>
  );
};

export default CustomTable;
