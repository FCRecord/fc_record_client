import React from "react";

import type { Preview } from "@storybook/react";
import GlobalStyle from "../src/styles/GlobalStyle"; // GlobalStyle의 경로 확인

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      );
    },
  ],
};

export default preview;
