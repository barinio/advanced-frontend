import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { to: "/", children: "Text" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Inverted: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
};

export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
};
export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
