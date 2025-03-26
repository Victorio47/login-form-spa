import clsx from "clsx";
import styles from "./FieldInfo.module.scss";

type FieldInfoProps = {
  id: string;
  error?: string;
  hint?: string;
};

export const FieldInfo = ({ id, error, hint }: FieldInfoProps) => {
  const text = error || hint || " ";
  const isHidden = !error && !hint;

  return (
    <p
      id={id}
      className={clsx(styles.fieldInfo, isHidden && styles.fieldInfo_hidden)}
      role={error ? "alert" : undefined}
    >
      {text}
    </p>
  );
};