import React from "react";
import classNames from "classnames";

type InputProps = {
  label: string;
  size?: "small" | "medium" | "large";
  error?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "label" | "error"
>;

const Input: React.FC<InputProps> = ({
  label,
  size = "medium",
  error,
  className,
  ...props
}) => {
  const inputClassName = classNames(
    "input",
    {
      "input--small": size === "small",
      "input--medium": size === "medium",
      "input--large": size === "large",
      "input--error": !!error,
    },
    className
  );

  return (
    <div className={`form-group ${inputClassName}`}>
      <label className="input-label">{label}</label>
      {error && <div className="error-message">{error}</div>}
      <input className="form-input" {...props} />
    </div>
  );
};

export default Input;
