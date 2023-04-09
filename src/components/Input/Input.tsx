import React from "react";
import classNames from "classnames";

type InputProps = {
  label: string;
  size?: "small" | "medium" | "large";
  error?: string;
  className?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "label" | "error" | "className"
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
    size ? `input--${size}` : "",
    error ? `input--${error}` : "",
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
