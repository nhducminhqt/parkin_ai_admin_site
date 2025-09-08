import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/logout";
import AdminUser from "./AdminUser";
import AdminParkinOrder from "./AdminParkinOrder";
import AdminServiceOrder from "./AdminServiceOrder";
import AdminParkinLot from "./AdminParkinLot";
import AdminDashboard from "./AdminDashboard";

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
    <div style={{ display: "flex", minHeight: "100vh", background: "#f7f7f7" }}>
      {/* Sidebar */}
      <div
        style={{
          width: 220,
          background: "#222",
          color: "#fff",
          padding: 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 style={{ marginBottom: 32 }}>Quản lý Admin</h3>
        <button
          style={{
            marginBottom: 16,
            background: selectedMenu === "dashboard" ? "#444" : "#333",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={() => setSelectedMenu("dashboard")}
        >
          Dashboard
        </button>
        <button
          style={{
            marginBottom: 16,
            background: selectedMenu === "user" ? "#444" : "#333",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={() => setSelectedMenu("user")}
        >
          User
        </button>
        <button
          style={{
            marginBottom: 16,
            background: selectedMenu === "parkinOrder" ? "#444" : "#333",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={() => setSelectedMenu("parkinOrder")}
        >
          Parkin Order
        </button>
        <button
          style={{
            marginBottom: 16,
            background: selectedMenu === "serviceOrder" ? "#444" : "#333",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={() => setSelectedMenu("serviceOrder")}
        >
          Service Order
        </button>
        <button
          style={{
            marginBottom: 16,
            background: selectedMenu === "parkinLot" ? "#444" : "#333",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={() => setSelectedMenu("parkinLot")}
        >
          Parkin Lot
        </button>
        {username && (
          <button
            onClick={handleLogout}
            disabled={loading}
            style={{
              marginTop: 32,
              background: "#e74c3c",
              color: "#fff",
              border: "none",
              padding: "10px 16px",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {loading ? "Đang đăng xuất..." : "Đăng xuất"}
          </button>
        )}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: 40 }}>
        <h2>Chào mừng {username ? username : "bạn"} đến với Parkin AI!</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
