import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const RouterDecorator = () => (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export default RouterDecorator;
