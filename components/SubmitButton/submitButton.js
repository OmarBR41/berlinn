import styles from "./submitButton.module.css";

export default function submitButton({ children }) {
  return (
    <button type="submit" className={styles.submit}>
      {children}
    </button>
  );
}
