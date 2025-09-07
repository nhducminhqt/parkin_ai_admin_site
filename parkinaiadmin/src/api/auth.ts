import { LoginRequest, LoginResponse } from "../types/auth";

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(
    "http://127.0.0.1:8000/backend/parkin/v1/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) throw new Error("Đăng nhập thất bại");
  return response.json();
}
