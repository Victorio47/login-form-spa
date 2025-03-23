import { useState } from "react";
import { InputField } from "../InputField";

type PasswordFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

export const PasswordField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
}: PasswordFieldProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <InputField
        type={visible ? "text" : "password"}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-pressed={visible}
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
};
