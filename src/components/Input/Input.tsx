import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Input.module.scss";

type InputProps = {
  hasError?: boolean;
  className?: string;
  ariaLabel?: string;
  describedBy?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      className,
      hasError = false,
      ariaLabel,
      describedBy,
      required,
      autoComplete = "off",
      spellCheck = false,
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(styles.input, hasError && styles.input_error, className)}
        aria-invalid={hasError}
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        aria-required={required}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        required={required}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";