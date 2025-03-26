import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import styles from "./Button.module.scss";
export const Button = ({ children, fullWidth = false, className, ariaLabel, type = "button", disabled = false, hasError = false, isLoading = false, ...rest }) => {
    return (_jsx("button", { type: type, disabled: disabled, "aria-label": ariaLabel, "aria-disabled": disabled, "aria-invalid": hasError, "aria-busy": isLoading, className: clsx(styles.button, fullWidth && styles.button_fullWidth, disabled && styles.button_disabled, hasError && styles.button_error, className), ...rest, children: children }));
};
