import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";

import CustomTable from "./CustomTable";
import CustomCheckBox from "../CheckBox";
import { TableProps, ColumnType } from "./CustomTable.type";

const columns: ColumnType<{
  key: string;
  test1: string;
  test2: number;
  test3: string;
  selectTest?: boolean;
}>[] = [
  { title: "Test1", dataIndex: "test1", key: "test1" },
  { title: "Test2", dataIndex: "test2", key: "test2" },
  { title: "Test3", dataIndex: "test3", key: "test3" },
  {
    title: "SelectTest",
    dataIndex: "selectTest",
    key: "selectTest",
    render: (_, record) => (
      <CustomCheckBox
        label={record?.test1}
        disabled={false}
        defaultChecked={record?.selectTest ?? false}
      />
    ),
  },
];

const data = [
  {
    key: "1",
    test1: "test1-data1",
    test2: 1,
    test3: "test3-data1",
    selectTest: true,
  },
  {
    key: "2",
    test1: "test1-data2",
    test2: 2,
    test3: "test3-data2",
    selectTest: false,
  },
  {
    key: "3",
    test1: "test1-data3",
    test2: 3,
    test3: "test3-data3",
    selectTest: true,
  },
];

export default {
  title: "Components/Common/Table",
  component: CustomTable,
  args: {
    columns,
    dataSource: data,
    pagination: {
      total: 10,
    },
  },
} as Meta<
  TableProps<{
    key: string;
    test1: string;
    test2: number;
    test3: string;
  }>
>;

const Template: StoryFn<typeof CustomTable> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ width: "80%", backgroundColor: "white", padding: "20px" }}>
      <CustomTable
        {...args}
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          setCurrent: setCurrentPage,
          total: args.pagination?.total,
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
