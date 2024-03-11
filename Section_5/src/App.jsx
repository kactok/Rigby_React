import Header from "./components/Header";
import InputSection from "./components/InputSection";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1 ? true : false;

  function handleUserInput(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputId]: +newValue };
    });
  }

  return (
    <>
      <Header></Header>
      <InputSection
        handleInput={handleUserInput}
        userInput={userInput}
      ></InputSection>
      {validInput ? (
        <Results input={userInput}></Results>
      ) : (
        <p className="center">Your input is invalid!</p>
      )}
    </>
  );
}

export default App;
