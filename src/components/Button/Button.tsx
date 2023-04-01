import { FC } from "react";
//import "./button.css";

interface Props {
  primary?: boolean;
  icon?: HTMLElement;
  size?: "small" | "medium" | "large";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  primary = false,
  size = "medium",
  icon,
  label,
  disabled,
  ...props
}) => {
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

export default Button;
