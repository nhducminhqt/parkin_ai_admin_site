import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/logout";
import AdminUser from "./AdminUser";
import AdminParkinOrder from "./AdminParkinOrder";
import AdminServiceOrder from "./AdminServiceOrder";
import AdminParkinLot from "./AdminParkinLot";
import AdminDashboard from "./AdminDashboard";
import "../css/home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<string>("dashboard");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUsername(user.username || "");
        setAccessToken(user.access_token || "");
      } catch {
        setUsername("");
        setAccessToken("");
      }
    }
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    setError("");
    try {
      await logout(accessToken);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Đăng xuất thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-wrapper">
      {/* Sidebar */}
      <div className="home-sidebar">
        <h3 className="home-sidebar-title">Quản lý Admin</h3>
        <button
          className={`home-sidebar-btn${
            selectedMenu === "dashboard" ? " selected" : ""
          }`}
          onClick={() => setSelectedMenu("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`home-sidebar-btn${
            selectedMenu === "user" ? " selected" : ""
          }`}
          onClick={() => setSelectedMenu("user")}
        >
          User
        </button>
        <button
          className={`home-sidebar-btn${
            selectedMenu === "parkinOrder" ? " selected" : ""
          }`}
          onClick={() => setSelectedMenu("parkinOrder")}
        >
          Parkin Order
        </button>
        <button
          className={`home-sidebar-btn${
            selectedMenu === "serviceOrder" ? " selected" : ""
          }`}
          onClick={() => setSelectedMenu("serviceOrder")}
        >
          Service Order
        </button>
        <button
          className={`home-sidebar-btn${
            selectedMenu === "parkinLot" ? " selected" : ""
          }`}
          onClick={() => setSelectedMenu("parkinLot")}
        >
          Parkin Lot
        </button>
        {username && (
          <button
            onClick={handleLogout}
            disabled={loading}
            className="home-logout-btn"
          >
            {loading ? "Đang đăng xuất..." : "Đăng xuất"}
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="home-main">
        {error && <p className="home-error">{error}</p>}
        {selectedMenu === "dashboard" && <AdminDashboard />}
        {selectedMenu === "user" && <AdminUser />}
        {selectedMenu === "parkinOrder" && <AdminParkinOrder />}
        {selectedMenu === "serviceOrder" && <AdminServiceOrder />}
        {selectedMenu === "parkinLot" && <AdminParkinLot />}
      </div>
    </div>
  );
};

export default Home;
