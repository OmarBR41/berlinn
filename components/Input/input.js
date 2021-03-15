// React hooks
// Component styles
import styles from "./input.module.css";

export default function Input({ id }) {
  return (
    <input
      id={id}
      name={id}
      className={styles.input}
      type="text"
      placeholder="John Doe"
      required
    />
  );
}
