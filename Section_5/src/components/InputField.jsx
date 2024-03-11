export default function InputField({ children, handleInput, id, userInput }) {
  return (
    <p>
      <label>{children}</label>
      <input
        type="number"
        required
        value={userInput[id]}
        onChange={(event) => handleInput(id, event.target.value)}
      />
    </p>
  );
}
