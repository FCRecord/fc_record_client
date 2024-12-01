import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomTable from "./CustomTable";
import { TableProps } from "antd";

export default {
  title: "Components/Common/Table",
  component: CustomTable,
  args: {
    columns: [
      {
        title: "Test1",
        dataIndex: "Test1",
        key: "Test1",
      },
      {
        title: "Test2",
        dataIndex: "Test2",
        key: "Test2",
      },
      {
        title: "Test3",
        dataIndex: "Test3",
        key: "Test3",
      },
    ],
    dataSource: [
      {
        key: "1",
        Test1: "Test1",
        Test2: "Test1",
        Test3: "Test1",
      },
      {
        key: "2",
        Test1: "Test2",
        Test2: "Test2",
        Test3: "Test2",
      },
      {
        key: "3",
        Test1: "Test3",
        Test2: "Test2",
        Test3: "Test3",
      },
    ],
    pagination: false,
  },
  argTypes: {
    style: { control: "object" },
    pagination: { control: "boolean" },
  },
} as Meta<TableProps<unknown>>;

const Template: StoryFn<TableProps<unknown>> = (args) => (
  <CustomTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pagination: false,
};
