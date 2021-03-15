// Local components
import Form from "../Form";

// Component styles
import styles from "./formContainer.module.css";

export default function FormContainer() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Agenda tus vacaciones</h2>
      <p className={styles.text}>¡Hospédate en el mejor hotel de Berlín!</p>
      <Form />
      <p className={styles.text}>No esperes más, ¡visítanos!</p>
    </div>
  );
}
