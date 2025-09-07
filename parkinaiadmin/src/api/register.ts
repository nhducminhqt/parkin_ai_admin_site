import { RegisterRequest, RegisterResponse } from "../types/register";

export async function register(
  data: RegisterRequest
): Promise<RegisterResponse> {
  const response = await fetch(
    "http://127.0.0.1:8000/backend/parkin/v1/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) throw new Error("Đăng ký thất bại");
  return response.json();
}
