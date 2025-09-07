import React, { useState } from "react";
import { register } from "../api/register";
import { RegisterRequest, RegisterResponse } from "../types/register";

const Register: React.FC = () => {
  const [form, setForm] = useState<RegisterRequest>({
    username: "",
    password: "",
    full_name: "",
    email: "",
    phone: "",
    gender: "",
    birth_date: "",
    avatar_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(null);
    try {
      const res: RegisterResponse = await register(form);
      setSuccess(res.message || "Đăng ký thành công!");
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
      <h2>Đăng ký tài khoản Parkin AI</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div style={{ marginBottom: 16 }} key={key}>
            <label>{key.replace(/_/g, " ")}: </label>
            <input
              type={key === "password" ? "password" : "text"}
              name={key}
              value={(form as any)[key]}
              onChange={handleChange}
              required={key !== "avatar_url"}
              style={{ width: "100%", padding: 8 }}
            />
          </div>
        ))}
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
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </button>
        {error && <div style={{ color: "red", marginTop: 16 }}>{error}</div>}
        {success && (
          <div style={{ color: "green", marginTop: 16 }}>{success}</div>
        )}
      </form>
    </div>
  );
};

export default Register;
