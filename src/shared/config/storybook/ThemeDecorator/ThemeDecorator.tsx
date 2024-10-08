import React from "react";
import { Theme } from "app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
