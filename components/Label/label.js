// Component styles
import styles from "./label.module.css";

export default function Label({ id, children }) {
  return (
    <label htmlFor={id} className={styles.label}>
      {children}
    </label>
  );
}
