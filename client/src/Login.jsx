import React, { useState } from 'react';
import Axios from 'axios';
import logo from './Styles/saya-logo.png';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const { setAuthInfo } = useContext(AuthContext);

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(alert("Incorrect email or password!"));
      } else {
        setAuthInfo({ isAuthenticated: true, userId: response.data[0].id });
        navigate("/Dashboard");
      }
    });
  };

  return (
    <div className="background">
      <div className='card'>

      <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <a href="/ForgotPassword">Forgot Password?</a>
      <p></p>
      <a href="/Register">Register</a>
      <label className="portal">Saya.Life Portal</label>
      <label className="welcome">Welcome to Saya.Life</label>
      <label className="enter">Enter your email and password below</label>

      <div className="pass">
      <label name="password" className="password">PASSWORD</label>
      <input type="password" placeholder='Password' className="passIn"
      onChange={(e) => {setPassword(e.target.value)}}/>
      </div>

      <div className="email">
      <label name="Email" className="emailText">EMAIL</label>
      <input type='text' placeholder='Email address' className="emailIn"
      onChange={(e) => {setUsername(e.target.value)}}/>
      </div>

      <button onClick={login} className="button">Log In</button>

      </div>
      </div>
      <h1> {loginStatus}</h1>
      </div>
  )};

export default Login;
