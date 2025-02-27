import { Meta, StoryObj } from "@storybook/react";
import NavigationMenuDemo from "./navmenu";

const meta: Meta<typeof NavigationMenuDemo> = {
  title: "Components/NavMenu",
  component: NavigationMenuDemo,
};

export default meta; 

type Story = StoryObj<typeof NavigationMenuDemo>;

export const Default: Story = {
  args: {
    
  },
};
