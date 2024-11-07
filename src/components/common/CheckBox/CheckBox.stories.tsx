import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomCheckBox from "./CustomCheckBox";
import { CheckBoxProps } from "./CustomCheckBox.type";

export default {
  title: "Components/Common/CheckBox",
  component: CustomCheckBox,
  args: {
    label: "체크박스",
    disabled: false,
    defaultChecked: false,
    imageSrc: "/check-mark.png",
    gap: 8,
  },
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    gap: { control: "text" },
    imageSrc: { control: "text" },
  },
} as Meta;

const Template: StoryFn<CheckBoxProps> = (args) => <CustomCheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "체크박스",
  disabled: false,
  defaultChecked: false,
  imageSrc: "/check-mark.png",
  gap: 8,
};
