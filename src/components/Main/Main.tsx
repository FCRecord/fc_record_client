import React, { useState } from "react";

import * as S from "./Main.style";
import CustomTable from "../common/Table";
import { ColumnType } from "../common/Table/CustomTable.type";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const columns: ColumnType<{
    key: string;
    name: string;
    age: number;
    address: string;
  }>[] = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
  ];

  const data = [
    { key: "1", name: "John Doe", age: 32, address: "New York" },
    { key: "2", name: "Jane Doe", age: 28, address: "Los Angeles" },
    { key: "3", name: "Alice", age: 25, address: "Chicago" },
  ];

  const prevOnChange = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextOnChange = () => {
    setCurrentPage(currentPage + 1);
  };

  const lastOnChange = () => {
    setCurrentPage(totalPage);
  };

  return (
    <S.container>
      <div style={{ width: "80%" }}>
        <CustomTable
          columns={columns}
          dataSource={data}
          pagination={{
            current: currentPage,
            total: totalPage,
            prevOnChange,
            nextOnChange,
            lastOnChange,
          }}
        ></CustomTable>
      </div>
    </S.container>
  );
};

export default Main;
