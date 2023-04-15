import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./index";
import Icon from "../Icon/Icon";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <Icon name="cross" />,
};

export const IconTextButton = Template.bind({});
IconTextButton.args = {
  icon: <Icon name="cross" size={12} color="light" />,
  label: "Close",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  disabled: true,
};
