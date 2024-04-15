import { useState } from "react";

export function useInput(initial, validationFn) {
  const [enteredValue, setEnteredValue] = useState(initial);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);
  function handleInputChange(event) {
    setDidEdit(false);
    setEnteredValue(event.target.value);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }
  return {
    enteredValue,
    didEdit,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid,
  };
}
