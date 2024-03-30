import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredState, setEnteredState] = useState("");

  function handleChange(event) {
    setEnteredState(event.target.value);
  }
  function handleClick() {
    onAdd(enteredState);
    setEnteredState("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredState}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 text-stone-500"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add task
      </button>
    </div>
  );
}
