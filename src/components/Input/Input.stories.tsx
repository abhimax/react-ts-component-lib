import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./index";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Label = Template.bind({});
Label.args = {
  label: "User Name",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "User Name",
  placeholder: "Enter User Name here...",
};

export const sizeSmall = Template.bind({});
sizeSmall.args = {
  label: "User Name",
  placeholder: "Enter User Name here...",
  size: "small",
};

export const sizeMedium = Template.bind({});
sizeMedium.args = {
  label: "User Name",
  placeholder: "Enter User Name here...",
  size: "medium",
};

export const sizeLarge = Template.bind({});
sizeLarge.args = {
  label: "User Name",
  placeholder: "Enter User Name here...",
  size: "large",
};

export const Error = Template.bind({});
Error.args = {
  label: "User Name",
  error: "Oops! Something went wrong!",
};

export const TypeNumber = Template.bind({});
TypeNumber.args = {
  label: "Number",
  placeholder: "Enter the number here...",
  type: "number",
  min: "1",
  max: "5",
};

export const TypePassword = Template.bind({});
TypePassword.args = {
  label: "Password",
  placeholder: "Enter Password Name here...",
  type: "password",
};

export const TypeDate = Template.bind({});
TypeDate.args = {
  label: "Due Date",
  placeholder: "Select the Due date",
  type: "date",
};

export const TypeMonth = Template.bind({});
TypeMonth.args = {
  label: "Month",
  placeholder: "Select the Month",
  type: "month",
};

export const TypeColor = Template.bind({});
TypeColor.args = {
  label: "Color",
  placeholder: "Select the Color",
  type: "color",
};

export const TypeRange = Template.bind({});
TypeRange.args = {
  label: "Brightness Level",
  type: "range",
};

export const TypeCheckbox = Template.bind({});
TypeCheckbox.args = {
  label: "Are you agreed?",
  type: "checkbox",
};

export const TypeRadio = Template.bind({});
TypeRadio.args = {
  label: "Are you agreed?",
  type: "radio",
};
