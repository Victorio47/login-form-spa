import type { InputHTMLAttributes } from "react";

type InputFieldProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({
  label,
  error,
  id,
  name,
  ...rest
}: InputFieldProps) => {
  const inputId = id || name;

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && (
        <div
          id={`${inputId}-error`}
          role="alert"
          style={{ color: "red", fontSize: "0.875rem" }}
        >
          {error}
        </div>
      )}
    </div>
  );
};
