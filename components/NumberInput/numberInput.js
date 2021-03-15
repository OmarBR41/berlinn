// React hooks
import { useState } from "react";

// Feather Icons
import { PlusCircle, MinusCircle } from "react-feather";

// Component styles
import styles from "./numberInput.module.css";

export default function NumberInput({ id, minVal, maxVal }) {
  const [value, setValue] = useState(minVal);

  const changeValue = (e) => {
    let newVal = e.target.value;

    if (newVal <= maxVal) {
      if (newVal <= minVal) {
        setValue(minVal);
      } else {
        setValue(newVal);
      }
    } else {
      setValue(maxVal);
    }
  };

  const decrement = () => {
    if (value > minVal) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    if (value < maxVal) {
      setValue(value + 1);
    }
  };

  return (
    <>
      <input
        id={id}
        name={id}
        className={styles.input}
        type="number"
        min={minVal}
        max={maxVal}
        value={value}
        onChange={changeValue}
      />
      <div className={styles.counters}>
        <MinusCircle
          className={`${styles.counter} ${
            value === minVal ? styles.counterDisabled : ""
          }`}
          onClick={decrement}
        />
        <PlusCircle
          className={`${styles.counter} ${
            value === maxVal ? styles.counterDisabled : ""
          }`}
          onClick={increment}
        />
      </div>
    </>
  );
}
