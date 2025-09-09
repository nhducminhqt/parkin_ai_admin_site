import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { LoginRequest } from "../types/auth";
import "../css/login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data: LoginRequest = { account, password };
      const res = await login(data);
      // Lưu thông tin user vào localStorage
      localStorage.setItem("user", JSON.stringify(res));
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Parkin AI - Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label>Email:</label>
          <input
            type="email"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div className="login-form-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <button type="submit" disabled={loading} className="login-btn">
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
