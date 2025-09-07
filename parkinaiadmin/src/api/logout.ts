export async function logout(
  access_token: string
): Promise<{ message: string }> {
  const response = await fetch(
    "http://127.0.0.1:8000/backend/parkin/v1/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  if (!response.ok) throw new Error("Logout thất bại");
  return response.json();
}
