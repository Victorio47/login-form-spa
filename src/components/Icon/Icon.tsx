import { ComponentProps } from "react";
import Eye from "@/icons/eye.svg?react";
import EyeOff from "@/icons/eye-off.svg?react";
;

import clsx from "clsx";
// import styles from "./Icon.module.scss";

const icons = {
  eye: Eye,
  "eye-off": EyeOff,
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
} & ComponentProps<"svg">;

export const Icon = ({ name, size = 20, className, ...rest }: IconProps) => {
  const IconComponent = icons[name];
  return (
    <div className={clsx("icon", className)}>
      <IconComponent
        width={size}
        height={size}
        aria-hidden="true"
        focusable="false"
        {...rest}
      />
    </div>
  );
};
