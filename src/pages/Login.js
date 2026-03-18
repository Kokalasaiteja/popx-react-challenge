import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() && password.trim();

  const handleLogin = () => {
    const success = loginUser(email, password);

    if (success) {
      navigate("/account");
    } else {
      alert("Invalid credentials");
    }
  };


  return (
    <div className="app-container">
      <div className="login-container">
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <input placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />

        <button className={isFormValid ? "primary-btn" : "login-btn"} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );

}