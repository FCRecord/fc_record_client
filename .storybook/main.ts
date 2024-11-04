// .storybook/main.ts

import path from "path";
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],

  webpackFinal: async (config) => {
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        src: path.resolve(__dirname, "../src"),
      },
      modules: [path.resolve(__dirname, "../src"), "node_modules"],
    };
    return config;
  },
};

export default config;
