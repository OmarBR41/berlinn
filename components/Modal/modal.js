// React hooks
import { useRef, useEffect } from "react";

// Local components
import InputGroup from "../InputGroup";
import Input from "../Input";
import EmailInput from "../EmailInput";
import SubmitButton from "../SubmitButton";

// Feather icon
import { XCircle } from "react-feather";

// Component styles
import styles from "./modal.module.css";

export default function Modal({ closeModal, data }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // Closes modal if clicked outside
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    // String literals for singular and plural nouns
    const roomsStr = `${data.rooms} habitaci${
      data.rooms === "1" ? "ón" : "ones"
    }`;
    const adultsStr = `${data.adults} adult${
      data.adults === "1" ? "o(a)" : "os(as)"
    }`;
    const kidsStr = `${data.kids} niñ${data.kids === "1" ? "o(a)" : "os(as)"}`;

    alert("Su reservación fue realizada exitosamente");

    console.log(
      `Reservación de ${roomsStr} entre los días ${data.arrivalDate} y ${data.departureDate}, para ${adultsStr} y ${kidsStr}, creada a nombre de ${name} y enviada al correo ${email}.`
    );

    closeModal();
  };

  return (
    <div className={styles.wrapper}>
      <form ref={modalRef} className={styles.container} onSubmit={handleSubmit}>
        <XCircle className={styles.closeBtn} onClick={closeModal} />
        <p className={styles.header}>Confirme su reservación</p>
        <p className={styles.text}>
          Ingrese su nombre y correo electrónico para enviarle sus datos de
          reservación
        </p>

        <InputGroup id="name" label="Nombre(s)" input={<Input id="name" />} />

        <InputGroup
          id="email"
          label="Correo electrónico"
          input={<EmailInput id="email" />}
        />

        <SubmitButton>Agendar reservación</SubmitButton>
      </form>
    </div>
  );
}
