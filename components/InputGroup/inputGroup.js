// Local components
import Label from "../Label";

// Component styles
import styles from "./inputGroup.module.css";

export default function InputGroup({ id, label, input }) {
  return (
    <div className={styles.container}>
      <Label id={id}>{label}</Label>
      {input}
    </div>
  );
}
