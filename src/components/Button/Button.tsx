import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  hasError?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  fullWidth = false,
  className,
  ariaLabel,
  type = "button",
  disabled = false,
  hasError = false,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      aria-invalid={hasError}
      aria-busy={isLoading}
      className={clsx(
        styles.button,
        fullWidth && styles.button_fullWidth,
        disabled && styles.button_disabled,
        hasError && styles.button_error,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
