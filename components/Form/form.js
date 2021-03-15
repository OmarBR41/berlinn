import { useState } from "react";

// Local components
import InputGroup from "../InputGroup";
import DateInputGroup from "../DateInputGroup";
import NumberInput from "../NumberInput";
import SubmitButton from "../SubmitButton";
import Modal from "../Modal";

// Component styles
import styles from "./form.module.css";

export default function Form() {
  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      arrivalDate: e.target.arrival.value,
      departureDate: e.target.departure.value,
      rooms: e.target.rooms.value,
      adults: e.target.adults.value,
      kids: e.target.kids.value,
    };

    setData(formData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <DateInputGroup />
        <InputGroup
          id="rooms"
          label="Habitaciones"
          input={<NumberInput id="rooms" minVal={1} maxVal={10} />}
        />
        <InputGroup
          id="adults"
          label="Adultos(as)"
          input={<NumberInput id="adults" minVal={1} maxVal={10} />}
        />
        <InputGroup
          id="kids"
          label="Niños(as)"
          input={<NumberInput id="kids" minVal={0} maxVal={10} />}
        />
        <SubmitButton>Reservar</SubmitButton>
      </form>

      {modalOpen && <Modal closeModal={closeModal} data={data} />}
    </>
  );
}
