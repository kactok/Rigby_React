import { useState } from "react";
import { useInput } from "../hooks/useInput.js";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function Login() {
  const {
    enteredValue: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: hasErrorEmail,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });
  const {
    enteredValue: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: hasErrorPassword,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={hasErrorEmail && "Please enter a valid email"}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={hasErrorPassword && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
