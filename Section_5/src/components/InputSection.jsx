import InputField from "./InputField";

export default function InputSection({ handleInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          handleInput={handleInput}
          id="initialInvestment"
          userInput={userInput}
        >
          Initial Investment
        </InputField>
        <InputField
          handleInput={handleInput}
          id="annualInvestment"
          userInput={userInput}
        >
          Annual Investment
        </InputField>
      </div>
      <div className="input-group">
        <InputField
          handleInput={handleInput}
          id="expectedReturn"
          userInput={userInput}
        >
          Expected Return
        </InputField>
        <InputField
          handleInput={handleInput}
          id="duration"
          userInput={userInput}
        >
          Duration
        </InputField>
      </div>
    </section>
  );
}
