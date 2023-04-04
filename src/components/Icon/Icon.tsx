import React from "react";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "default" }) => {
  return (
    <div className={`ui-icon ${name} ${color}`} style={{ width: size }}>
      {icons[name]}
    </div>
  );
};

const icons = {
  cross: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
      <path
        d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
      />
    </svg>
  ),
  starEmpty: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" fill="none">
      <path
        d="M6.13737 8.32581L6 8.23546L5.86263 8.32581L2.88962 10.2811L3.83047 6.84936L3.87395 6.6908L3.74557 6.58807L0.967298 4.36478L4.52179 4.19913L4.68603 4.19147L4.74406 4.03764L6 0.708304L7.25594 4.03764L7.31397 4.19147L7.47821 4.19913L11.0327 4.36478L8.25443 6.58807L8.12605 6.6908L8.16953 6.84936L9.11038 10.2811L6.13737 8.32581Z"
        strokeWidth="0.5"
      />
    </svg>
  ),
};

export default Icon;
