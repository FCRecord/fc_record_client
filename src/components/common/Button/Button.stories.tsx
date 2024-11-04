import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomButton from "./CustomButton";
import { ButtonProps } from "./CustomButton.type";

export default {
  title: "Components/Common/Button",
  component: CustomButton,
  args: {
    children: "Click Me",
    variant: "primary",
    isLoading: false,
  },
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "danger",
        "success",
        "danger",
      ],
    },
    isLoading: { control: "boolean" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  variant: "primary",
  isLoading: false,
};
