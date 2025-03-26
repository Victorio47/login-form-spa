import clsx from "clsx";
import styles from "./Toggle.module.scss";

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
  ariaLabel: string;
};

export const Toggle = ({ checked, onChange, ariaLabel }: ToggleProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={clsx(styles.toggle, checked && styles.toggle_checked)}
      onClick={onChange}
    >
      <span className={styles.toggle__circle} aria-hidden="true" />
    </button>
  );
};