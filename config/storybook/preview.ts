import React from "react";
import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

global.React = React;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [RouterDecorator(), ThemeDecorator(Theme.LIGHT)],
};

export default preview;
