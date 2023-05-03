import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/saya-logo.png';

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
    <div className="backgroundLogin">
      <div className='card'>
        <div className="container">
          <img src={logo} alt="Logo" className="logo" />
          <p></p>
          <label className="portal">Saya.Life Portal</label>
          <label className="title">Reset Your Password</label>
          <label className="enter">Fill with your email to receive instructions on how to reset your password</label>
          {message && <p>{message}</p>}
          <div className="email">
            <form onSubmit={handleSubmit}>
              <label className="emailText" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                className="emailIn"
                placeholder=' Email address'
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit" className='sendLoginEmailButton'>Send Email</button>
            </form>
          </div>
          <button onClick={backToLogin} className="returnToLogin">Return to Login</button>
        </div>
      </div>
    </div>
  );
}




export default ForgotPassword;











