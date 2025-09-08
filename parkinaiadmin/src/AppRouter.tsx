import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

// ...existing code...

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/home";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default AppRoutes;
