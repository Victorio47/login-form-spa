import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import styles from "./Toggle.module.scss";
export const Toggle = ({ checked, onChange, ariaLabel }) => {
    return (_jsx("button", { type: "button", role: "switch", "aria-checked": checked, "aria-label": ariaLabel, className: clsx(styles.toggle, checked && styles.toggle_checked), onClick: onChange, children: _jsx("span", { className: styles.toggle__circle, "aria-hidden": "true" }) }));
};
