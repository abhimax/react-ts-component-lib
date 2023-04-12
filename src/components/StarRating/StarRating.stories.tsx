import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StarRating } from "./";

export default {
  title: "Components/StarRating",
  component: StarRating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
  <StarRating {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  rating: 2,
};
export const Rating5 = Template.bind({});
Rating5.args = {
  rating: 5,
};
export const Rating10 = Template.bind({});
Rating10.args = {
  rating: 10,
};
export const Rating3point2 = Template.bind({});
Rating3point2.args = {
  rating: 3.2,
};
export const Rating3point5 = Template.bind({});
Rating3point5.args = {
  rating: 3.5,
};

export const Rating3point8 = Template.bind({});
Rating3point8.args = {
  rating: 3.8,
};
