import { FC } from "react";
import { IButtonProps } from "./Button.d";

const Button: FC<IButtonProps> = ({
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
