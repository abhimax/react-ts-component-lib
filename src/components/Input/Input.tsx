import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  const inputClassName = error ? "input error" : "input";
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
