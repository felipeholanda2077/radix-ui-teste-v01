import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs"; 

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    tabLabels: { control: "object" },
    buttonColor: { control: "color" },
    activeButtonColor: { control: "color" },
    bgContentColor: { control: "color" },
  },
};

export default meta; 

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabLabels: [],
    buttonColor: "",
    activeButtonColor: "",
  },
};