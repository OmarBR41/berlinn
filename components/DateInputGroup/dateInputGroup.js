// React hooks
import { useState, useRef } from "react";

// Local components
import InputGroup from "../InputGroup";

// Feather Icons
import { Calendar } from "react-feather";

// Component styles
import styles from "./dateInputGroup.module.css";

// React DatePicker dependencies
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

// Changes calendar locale
registerLocale("es", es);
setDefaultLocale("es");

// Today and Tomorrow date objects
let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export default function DateInputGroup() {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  const startRef = useRef();
  const endRef = useRef();

  const changeStartDate = (date) => {
    setStartDate(date);

    // If new date is after endDate, sets endDate one day after selected date
    if (date >= endDate) {
      let nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      changeEndDate(nextDay);
    }

    // Opens endDate calendar
    endRef.current.setOpen(true);
  };

  const changeEndDate = (date) => {
    setEndDate(date);
  };

  return (
    <>
      <InputGroup
        id="arrival"
        label="Fecha de llegada"
        input={
          <>
            <DatePicker
              ref={startRef}
              id="arrival"
              name="arrival"
              className={styles.input}
              selected={startDate}
              onChange={changeStartDate}
              selectsStart
              minDate={today}
              startDate={startDate}
              endDate={endDate}
              dateFormat="EE, d 'de' MMMM, yyyy"
            />
            <Calendar
              className={styles.calendar}
              onClick={() => startRef.current.setOpen(true)}
            />
          </>
        }
      />
      <InputGroup
        id="departure"
        label="Fecha de salida"
        input={
          <>
            <DatePicker
              ref={endRef}
              id="departure"
              name="departure"
              className={styles.input}
              selected={endDate}
              onChange={changeEndDate}
              selectsEnd
              minDate={startDate}
              startDate={startDate}
              endDate={endDate}
              dateFormat="EE, d 'de' MMMM, yyyy"
            />
            <Calendar
              className={styles.calendar}
              onClick={() => endRef.current.setOpen(true)}
            />
          </>
        }
      />
    </>
  );
}
