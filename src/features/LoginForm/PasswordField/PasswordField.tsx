import { useState } from "react";
import { Icon, Input } from "@/components";
import { FieldInfo } from "../FieldInfo";
import styles from "./PasswordField.module.scss";

type PasswordFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
};

export const PasswordField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  hint,
  required,
  disabled,
}: PasswordFieldProps) => {
  const [visible, setVisible] = useState(false);
  const inputId = `${name}-input`;
  const messageId = `${name}-message`;

  return (
    <div className={styles.passwordField}>
      <label
        htmlFor={inputId}
        className={styles.passwordField__label}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      <div className={styles.passwordField__inputWrapper}>
        <Input
          id={inputId}
          name={name}
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="current-password"
          hasError={!!error}
          disabled={disabled}
          required={required}
          className={styles.passwordField__input}
          aria-describedby={messageId}
          aria-invalid={!!error}
        />
        <button
          type="button"
          className={styles.passwordField__icon}
          onClick={() => setVisible((v) => !v)}
          onMouseDown={(e) => e.preventDefault()}
          aria-pressed={visible}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          <Icon name={visible ? "eye-off" : "eye"} />
          <span className={styles.passwordField__icon_visuallyHidden}>
            {visible ? "Hide password" : "Show password"}
          </span>
        </button>
      </div>

      <FieldInfo id={messageId} error={error} hint={hint} />
    </div>
  );
};
