import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../services/auth";
import "../App.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleSubmit = () => {
    // Required fields validation
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.password.trim()) {
      alert("Please fill Full Name*, Phone number*, Email address*, and Password*");
      return;
    }
    
    registerUser(form);
    // Auto-login after successful registration
    const loginSuccess = loginUser(form.email, form.password);
    if (loginSuccess) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };


  return (
    <div className="app-container">
      <div className="signup-container">
        <h2>Create your PopX account</h2>

        <label>Full Name*</label>
        <input placeholder="Full Name*" onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <label>Phone number*</label>
        <input placeholder="Phone number*" onChange={(e)=>setForm({...form,phone:e.target.value})}/>
        <label>Email address*</label>
        <input placeholder="Email address*" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <label>Password*</label>
        <input type="password" placeholder="Password*" onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <label>Company name</label>
        <input placeholder="Company name" onChange={(e)=>setForm({...form,company:e.target.value})}/>

        <div className="agency-text">
          <p>Are you an Agency?</p>
          <div className="radio-group">
            <label><input type="radio" name="agency" value="Yes" checked onChange={(e)=>setForm({...form,agency:e.target.value})} /> Yes</label>
            <label><input type="radio" name="agency" value="No" onChange={(e)=>setForm({...form,agency:e.target.value})} /> No</label>
          </div>
        </div>

        <button className="primary-btn" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );

}