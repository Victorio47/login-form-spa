import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import styles from "./FieldInfo.module.scss";
export const FieldInfo = ({ id, error, hint }) => {
    const text = error || hint || " ";
    const isHidden = !error && !hint;
    return (_jsx("p", { id: id, className: clsx(styles.fieldInfo, isHidden && styles.fieldInfo_hidden), role: error ? "alert" : undefined, children: text }));
};
