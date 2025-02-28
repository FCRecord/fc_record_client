import React, { useState, useEffect } from "react";
import { StoryFn, Meta } from "@storybook/react";

import Slider from "./Slider";
import { SliderProps } from "./Slider.type";

export default {
  title: "Components/Common/Slider",
  component: Slider,
  args: {
    type: "none",
    minValue: 1,
    maxValue: 100,
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["none", "min", "max"],
    },
    minValue: { control: "number" },
    maxValue: { control: "number" },
    firstThumbPosition: { control: "number" },
    secondThumbPosition: { control: "number" },
  },
} as Meta<SliderProps>;

const Template: StoryFn<SliderProps> = (args) => {
  const [firstThumbPosition, setFirstThumbPosition] = useState(
    args.firstThumbPosition ?? 1
  );
  const [secondThumbPosition, setSecondThumbPosition] = useState(
    args.secondThumbPosition ?? 30
  );

  useEffect(() => {
    if (args.firstThumbPosition !== undefined) {
      setFirstThumbPosition(args.firstThumbPosition);
    }
  }, [args.firstThumbPosition]);

  useEffect(() => {
    if (args.secondThumbPosition !== undefined) {
      setSecondThumbPosition(args.secondThumbPosition);
    }
  }, [args.secondThumbPosition]);

  return (
    <Slider
      {...args}
      firstThumbPosition={firstThumbPosition}
      secondThumbPosition={secondThumbPosition}
      setFirstThumbPosition={setFirstThumbPosition}
      setSecondThumbPosition={setSecondThumbPosition}
    />
  );
};

export const Default = Template.bind({});
