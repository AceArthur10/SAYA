import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to send email to user goes here
    setMessage(`An email has been sent to ${email} with instructions on how to reset your password.`);
    setEmail("");
  };

  const backToLogin = () => {
    navigate("/")

  }
  return (
    <div>
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button type="submit">Send Email</button>
        <p></p>
        <button onClick={backToLogin}>Back to Login</button>
      </form>
    </div>
  );
}




export default ForgotPassword;











