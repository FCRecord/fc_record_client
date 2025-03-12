import React from "react";

import * as S from "./CustomTable.style";
import PaginationDots from "./Pagination/PaginationDots";
import PaginationButton from "./Pagination/PaginationButton";
import PaginationNumber from "./Pagination/PaginationNumber";
import { TableProps } from "./CustomTable.type";
import {
  generatePagination,
  prevPageOnChange,
  nextPageOnChange,
  changePage,
} from "./CustomTable.hook";

const CustomTable = <T,>({
  columns,
  dataSource,
  pagination,
  locale,
}: TableProps<T>) => {
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
          <PaginationButton
            type="prev"
            disabled={pagination.current === 1}
            onClick={() =>
              prevPageOnChange(pagination.current!, pagination.setCurrent!)
            }
          />
          {generatePagination(
            pagination?.current ?? 1,
            pagination?.total ?? 1
          ).map((page) => (
            <div key={page}>
              {page === "dots-left" || page === "dots-right" ? (
                <PaginationDots
                  type={page}
                  totalPage={pagination.total!}
                  setCurrent={pagination.setCurrent!}
                />
              ) : (
                <PaginationNumber
                  page={Number(page)}
                  isActive={pagination.current === page}
                  handleClick={() =>
                    changePage(Number(page), pagination.setCurrent!)
                  }
                />
              )}
            </div>
          ))}
          <PaginationButton
            type="next"
            disabled={pagination.current! >= pagination.total!}
            onClick={() =>
              nextPageOnChange(pagination.current!, pagination.setCurrent!)
            }
          />
        </S.PaginationWrapper>
      )}
    </S.TableWrapper>
  );
};

export default CustomTable;
