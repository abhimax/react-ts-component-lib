import React from "react";
//import "./button.css";

interface ButtonProps {
  primary?: boolean;
  icon?: HTMLElement;
  size?: "small" | "medium" | "large";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  icon,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  const mode = primary ? "btn--primary" : "btn--secondary";
  return (
    <button
      type="button"
      className={["ui-button", `btn--${size}`, mode].join(" ")}
      disabled={disabled}
      {...props}
    >
      <>
        {icon}
        {label}
      </>
    </button>
  );
};
