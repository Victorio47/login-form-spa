import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";
import { ThemeToggle } from "@/features";
import { Button } from "@/components";
import { useFocusTrap, useFormValidation } from "@/hooks";
import styles from "./LoginForm.module.scss";
export const LoginForm = () => {
    const formRef = useRef(null);
    useFocusTrap(formRef);
    const { form, errors, submitting, message, handleChange, handleBlur, handleSubmit, } = useFormValidation({ email: "", password: "" });
    return (_jsxs("main", { className: styles.loginForm, children: [_jsx("h1", { id: "login-form-title", className: styles.loginForm__title, children: "Sign in" }), _jsx("div", { className: styles.loginForm__form, children: _jsxs("form", { ref: formRef, onSubmit: (e) => handleSubmit(e, () => { }), noValidate: true, "aria-labelledby": "login-form-title", children: [_jsx(EmailField, { label: "Email", name: "email", value: form.email, onChange: handleChange, onBlur: handleBlur, error: errors.email }), _jsx(PasswordField, { label: "Password", name: "password", value: form.password, onChange: handleChange, onBlur: handleBlur, error: errors.password }), _jsx(Button, { disabled: submitting, type: "submit", children: submitting ? "Logging in..." : "Sign in" }), _jsxs("div", { className: styles.loginForm__messageWrap, children: [message && (_jsx("div", { className: styles.loginForm__message, role: "status", children: message })), errors?.submit && (_jsx("div", { className: styles.loginForm__error, role: "alert", children: errors.submit }))] }), _jsx(ThemeToggle, {})] }) })] }));
};
