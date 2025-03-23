import clsx from "clsx";
import styles from "./Toggle.module.scss";

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
};

export const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <div
      className={clsx(styles.toggle, checked && styles["toggle--checked"])}
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
    >
      <div className={styles.toggle__circle} />
    </div>
  );
};
