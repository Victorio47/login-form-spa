import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "@/components";
import { FieldInfo } from "../FieldInfo";
import styles from "./EmailField.module.scss";
export const EmailField = ({ label, name, value, onChange, onBlur, error, hint, required, disabled, }) => {
    const inputId = `${name}-input`;
    const messageId = `${name}-message`;
    return (_jsxs("div", { className: styles.emailField, children: [_jsxs("label", { htmlFor: inputId, className: styles.emailField__label, children: [label, required && _jsx("span", { "aria-hidden": "true", children: " *" })] }), _jsx(Input, { id: inputId, name: name, type: "email", value: value, onChange: onChange, onBlur: onBlur, autoComplete: "email", hasError: !!error, disabled: disabled, required: required, className: styles.emailField__input, "aria-describedby": messageId, "aria-invalid": !!error }), _jsx(FieldInfo, { id: messageId, error: error, hint: hint })] }));
};
