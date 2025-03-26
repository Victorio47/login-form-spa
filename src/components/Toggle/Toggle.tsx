import clsx from "clsx";
import styles from "./Toggle.module.scss";

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
};

export const Toggle = ({ checked, onChange, ariaLabel }: ToggleProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onChange();
    }
  };

  return (
    <div
      className={clsx(styles.toggle, checked && styles.toggle_checked)}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onClick={onChange}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel ?? "Toggle dark mode"}
    >
      <div className={styles.toggle__circle} />
    </div>
  );
};
