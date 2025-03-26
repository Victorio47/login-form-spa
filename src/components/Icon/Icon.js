import { jsx as _jsx } from "react/jsx-runtime";
import Eye from "@/icons/eye.svg?react";
import EyeOff from "@/icons/eye-off.svg?react";
;
import clsx from "clsx";
// import styles from "./Icon.module.scss";
const icons = {
    eye: Eye,
    "eye-off": EyeOff,
};
export const Icon = ({ name, size = 20, className, ...rest }) => {
    const IconComponent = icons[name];
    return (_jsx("div", { className: clsx("icon", className), children: _jsx(IconComponent, { width: size, height: size, "aria-hidden": "true", focusable: "false", ...rest }) }));
};
