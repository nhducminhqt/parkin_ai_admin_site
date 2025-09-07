import React, { useState } from "react";
import { login } from "../api/auth";
import { LoginRequest, LoginResponse } from "../types/auth";

const Login: React.FC = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<LoginResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data: LoginRequest = { account, password };
      const res = await login(data);
      setUser(res);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: 32,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px #eee",
      }}
    >
      <h2>Parkin AI - Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Email:</label>
          <input
            type="email"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 10,
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 4,
          }}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
        {error && <div style={{ color: "red", marginTop: 16 }}>{error}</div>}
      </form>
      {user && (
        <div
          style={{
            marginTop: 32,
            background: "#f5f5f5",
            padding: 16,
            borderRadius: 8,
          }}
        >
          <h3>Xin chào, {user.username}!</h3>
          <p>Vai trò: {user.role}</p>
          <p>Số dư ví: {user.wallet_balance}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
