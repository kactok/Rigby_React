import { useState } from "react";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [blur, setBlur] = useState(false);

  const emailIsInvalid = !enteredEmail.includes("@") && blur;

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleEmailChange(event) {
    setBlur(false);
    setEnteredEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }

  function handleEmailBlur() {
    setBlur(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            value={enteredEmail}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={enteredPassword}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}