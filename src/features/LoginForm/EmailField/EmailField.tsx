import { Input } from "@/components";
import { FieldInfo } from "../FieldInfo";
import styles from "./EmailField.module.scss";

type EmailFieldProps = {
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

export const EmailField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  hint,
  required,
  disabled,
}: EmailFieldProps) => {
  const inputId = `${name}-input`;
  const messageId = `${name}-message`;

  return (
    <div className={styles.emailField}>
      <label
        htmlFor={inputId}
        className={styles.emailField__label}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      <Input
        id={inputId}
        name={name}
        type="email"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="email"
        hasError={!!error}
        disabled={disabled}
        required={required}
        className={styles.emailField__input}
        aria-describedby={messageId}
        aria-invalid={!!error}
      />

      <FieldInfo id={messageId} error={error} hint={hint} />
    </div>
  );
};
