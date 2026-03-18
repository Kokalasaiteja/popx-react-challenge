import React from "react";
import { getCurrentUser } from "../services/auth";
import "../App.css";

export default function Account() {
  const user = getCurrentUser();

  return (
    <div className="app-container">
      <div className="profile-page">
        <h2 className="profile-title">Account Settings</h2>
        
        <div className="profile-header">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
            alt="Profile" 
            className="profile-img"
            style={{borderRadius: '50%', objectFit: 'cover'}}
          />
          <div>
            <h4>{user?.name}</h4>
            <p>{user?.email}</p>
          </div>
        </div>

        <p className="profile-text" style={{lineHeight: '1.4', height: '4.2em', overflow: 'hidden'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
