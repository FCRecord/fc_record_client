import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import MainCard from "./MainCard";
import { MainCardProps } from "./MainCard.type";

export default {
  title: "Components/Common/MainCard",
  component: MainCard,
  args: {
    backgroundColor: "#14213D",
    CardLayout: "full",
    children: "MainCard Test",
    style: { padding: "10px", color: "white" },
  },
  argTypes: {
    backgroundColor: { control: "color" },
    CardLayout: {
      control: { type: "select" },
      options: ["full", "half"],
    },
    style: { control: "object" },
    children: { control: "text" },
  },
} as Meta<MainCardProps>;

const Template: StoryFn<MainCardProps> = (args) => <MainCard {...args} />;

export const Default = Template.bind({});
