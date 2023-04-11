interface IButtonProps {
  primary?: boolean;
  icon?: HTMLElement;
  size?: "small" | "medium" | "large";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}
export { IButtonProps };
