interface IButtonProps {
  primary?: boolean;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export { IButtonProps };
