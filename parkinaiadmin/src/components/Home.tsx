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
          className={selectedMenu === "dashboard" ? "home-logout-btn" : ""}
          style={{
            marginBottom: 16,
            background: selectedMenu === "dashboard" ? "#444" : "#333",
          }}
          onClick={() => setSelectedMenu("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={selectedMenu === "user" ? "home-logout-btn" : ""}
          style={{
            marginBottom: 16,
            background: selectedMenu === "user" ? "#444" : "#333",
          }}
          onClick={() => setSelectedMenu("user")}
        >
          User
        </button>
        <button
          className={selectedMenu === "parkinOrder" ? "home-logout-btn" : ""}
          style={{
            marginBottom: 16,
            background: selectedMenu === "parkinOrder" ? "#444" : "#333",
          }}
          onClick={() => setSelectedMenu("parkinOrder")}
        >
          Parkin Order
        </button>
        <button
          className={selectedMenu === "serviceOrder" ? "home-logout-btn" : ""}
          style={{
            marginBottom: 16,
            background: selectedMenu === "serviceOrder" ? "#444" : "#333",
          }}
          onClick={() => setSelectedMenu("serviceOrder")}
        >
          Service Order
        </button>
        <button
          className={selectedMenu === "parkinLot" ? "home-logout-btn" : ""}
          style={{
            marginBottom: 16,
            background: selectedMenu === "parkinLot" ? "#444" : "#333",
          }}
          onClick={() => setSelectedMenu("parkinLot")}
        >
          Parkin Lot
        </button>
        {username && (
          <button
            onClick={handleLogout}
            disabled={loading}
            className="home-logout-btn"
            style={{ marginTop: 32, background: "#e74c3c" }}
          >
            {loading ? "Đang đăng xuất..." : "Đăng xuất"}
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="home-main">
        <h2>Chào mừng {username ? username : "bạn"} đến với Parkin AI!</h2>
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
