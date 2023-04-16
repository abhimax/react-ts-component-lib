import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "./index";

export default {
  title: "Components/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Size50 = Template.bind({});
Size50.args = {
  size: "50px",
};

export const Size100 = Template.bind({});
Size100.args = {
  size: "100px",
};
