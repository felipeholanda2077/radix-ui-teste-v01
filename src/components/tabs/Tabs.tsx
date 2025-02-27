import * as React from "react";
import { Tabs } from "radix-ui";

type TabsCompoProps = {
  tabLabels?: string[];
  buttonColor?: string;
  activeButtonColor?: string;
  bgContentColor?: string;
};

const TabsCompo: React.FC<TabsCompoProps> = ({ 
  tabLabels = [], 
  buttonColor, 
  activeButtonColor, 
  bgContentColor,
  ...props
}) => (
  <Tabs.Root
    className="flex w-[300px] flex-col shadow-lg rounded-lg bg-gray-100 p-4"
    defaultValue={tabLabels.length > 0 ? tabLabels[0] : ""}
  >
    <Tabs.List
      className="flex shrink-0 border-b border-gray-300 bg-white rounded-t-lg"
    >
      {tabLabels.map((label, index) => (
        <Tabs.Trigger
          key={label}
          className={`flex h-[45px] m-1 flex-1 cursor-pointer select-none items-center justify-center px-5 text-[15px] font-medium text-gray-700 rounded-t-lg hover:bg-gray-300 ${buttonColor} data-[state=active]:${activeButtonColor} data-[state=active]:text-white`}
          value={`tab${index + 1}`}
		  {...props}
        >
          {label}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabLabels.map((label, index) => (
      <Tabs.Content
        key={label}
        className={`shadow-md rounded-b-lg p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black ${bgContentColor}`}
        value={`tab${index + 1}`}
      >
        <p className="mb-5 text-[15px] text-black leading-normal text-gray-700">
          Content for {label}
        </p>
      </Tabs.Content>
    ))}
  </Tabs.Root>
);

export default TabsCompo;
