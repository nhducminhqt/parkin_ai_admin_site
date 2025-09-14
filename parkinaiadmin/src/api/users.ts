// API endpoints for user management
const API_BASE_URL = "http://localhost:8000/backend/parkin/v1";

export interface User {
  user_id: number;
  username: string;
  email: string;
  phone: string;
  full_name: string;
  gender: string;
  birth_date: string;
  role: string;
  avatar_url: string;
  wallet_balance: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  page: number;
  size: number;
}

// Utility function for retry with exponential backoff
const retryWithDelay = async <T>(
  fn: () => Promise<T>,
  retries: number = 5,
  delay: number = 1000
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying in ${delay}ms... (${retries} attempts left)`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return retryWithDelay(fn, retries - 1, delay * 2);
    }
    throw error;
  }
};

// Function to fetch users with pagination
export const fetchUsers = async (
  page: number = 1,
  pageSize: number = 10
): Promise<UsersResponse> => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found in localStorage");
    throw new Error("Vui lòng đăng nhập lại để tiếp tục");
  }

  const fetchFunction = async (): Promise<UsersResponse> => {
    console.log(`Fetching users - Page: ${page}, Size: ${pageSize}`);
    console.log(`Using token: ${token ? "Token found" : "No token"}`);

    const response = await fetch(
      `${API_BASE_URL}/admin/users?page=${page}&page_size=${pageSize}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`Users API Response Status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Users API Error:", errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data: UsersResponse = await response.json();
    console.log("Users API Success:", data);
    return data;
  };

  return retryWithDelay(fetchFunction);
};

// Function to search users by username or email
export const searchUsers = async (
  query: string,
  page: number = 1,
  pageSize: number = 10
): Promise<UsersResponse> => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found in localStorage");
    throw new Error("Vui lòng đăng nhập lại để tiếp tục");
  }

  const fetchFunction = async (): Promise<UsersResponse> => {
    console.log(
      `Searching users - Query: ${query}, Page: ${page}, Size: ${pageSize}`
    );
    console.log(`Using token: ${token ? "Token found" : "No token"}`);

    const response = await fetch(
      `${API_BASE_URL}/admin/users?page=${page}&page_size=${pageSize}&search=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`Search Users API Response Status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Search Users API Error:", errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data: UsersResponse = await response.json();
    console.log("Search Users API Success:", data);
    return data;
  };

  return retryWithDelay(fetchFunction);
};

// Function to fetch single user by ID
export const fetchUserById = async (userId: number): Promise<User> => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found in localStorage");
    throw new Error("Vui lòng đăng nhập lại để tiếp tục");
  }

  const fetchFunction = async (): Promise<User> => {
    console.log(`Fetching user details - ID: ${userId}`);
    console.log(`Using token: ${token ? "Token found" : "No token"}`);

    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log(`User Detail API Response Status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("User Detail API Error:", errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data: User = await response.json();
    console.log("User Detail API Success:", data);
    return data;
  };

  return retryWithDelay(fetchFunction);
};
