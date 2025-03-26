import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./Input.module.scss";
export const Input = forwardRef(({ type = "text", className, hasError = false, ariaLabel, describedBy, required, autoComplete = "off", spellCheck = false, ...rest }, ref) => {
    return (_jsx("input", { ref: ref, type: type, className: clsx(styles.input, hasError && styles.input_error, className), "aria-invalid": hasError, "aria-label": ariaLabel, "aria-describedby": describedBy, "aria-required": required, autoComplete: autoComplete, spellCheck: spellCheck, required: required, ...rest }));
});
Input.displayName = "Input";
