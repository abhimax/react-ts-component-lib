import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Cross = Template.bind({});
Cross.args = {
  name: "cross",
};

export const starEmpty = Template.bind({});
starEmpty.args = {
  name: "starEmpty",
};

export const Dark = Template.bind({});
Dark.args = {
  name: "starEmpty",
  color: "dark",
};

export const size40 = Template.bind({});
size40.args = {
  name: "starEmpty",
  color: "dark",
  size: 40,
};
