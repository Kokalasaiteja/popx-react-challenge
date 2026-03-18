import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";

import { getCurrentUser } from "./services/auth";

// 🔒 Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = getCurrentUser();

  // If no user logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 📝 Register */}
        <Route path="/register" element={<Register />} />

        {/* 🔐 Login */}
        <Route path="/login" element={<Login />} />

        {/* 👤 Account (Protected) */}
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />

        {/* ❌ Invalid Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;