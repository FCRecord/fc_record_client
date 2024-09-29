import { TableProps } from "antd";
import { CSSProperties } from "react";

import * as S from "./CustomTable.style";

interface TableComponentProps extends TableProps<unknown> {
  style?: CSSProperties;
}

const CustomTable = (props: TableComponentProps) => {
  const { pagination, columns, locale, dataSource, style, ...rest } = props;

  return (
    <S.CustomTable
      pagination={pagination}
      columns={columns}
      locale={locale}
      dataSource={dataSource}
      style={style}
      {...rest}
    />
  );
};

export default CustomTable;
