// Component styles
import styles from "./emailInput.module.css";

export default function EmailInput({ id }) {
  return (
    <input
      id={id}
      name={id}
      className={styles.input}
      type="email"
      placeholder="john_doe@example.com"
      required
    />
  );
}
