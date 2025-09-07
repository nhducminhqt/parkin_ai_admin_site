import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

const AppRouter: React.FC = () => (
  <Router>
    <Navbar />
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
  </Router>
);

export default AppRouter;
