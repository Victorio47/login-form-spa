import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Icon, Input } from "@/components";
import { FieldInfo } from "../FieldInfo";
import styles from "./PasswordField.module.scss";
export const PasswordField = ({ label, name, value, onChange, onBlur, error, hint, required, disabled, }) => {
    const [visible, setVisible] = useState(false);
    const inputId = `${name}-input`;
    const messageId = `${name}-message`;
    return (_jsxs("div", { className: styles.passwordField, children: [_jsxs("label", { htmlFor: inputId, className: styles.passwordField__label, children: [label, required && _jsx("span", { "aria-hidden": "true", children: " *" })] }), _jsxs("div", { className: styles.passwordField__inputWrapper, children: [_jsx(Input, { id: inputId, name: name, type: visible ? "text" : "password", value: value, onChange: onChange, onBlur: onBlur, autoComplete: "current-password", hasError: !!error, disabled: disabled, required: required, className: styles.passwordField__input, "aria-describedby": messageId, "aria-invalid": !!error }), _jsxs("button", { type: "button", className: styles.passwordField__icon, onClick: () => setVisible((v) => !v), onMouseDown: (e) => e.preventDefault(), "aria-pressed": visible, "aria-label": visible ? "Hide password" : "Show password", children: [_jsx(Icon, { name: visible ? "eye-off" : "eye" }), _jsx("span", { className: styles.passwordField__icon_visuallyHidden, children: visible ? "Hide password" : "Show password" })] })] }), _jsx(FieldInfo, { id: messageId, error: error, hint: hint })] }));
};
