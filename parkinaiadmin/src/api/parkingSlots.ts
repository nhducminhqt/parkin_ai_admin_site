export interface ParkingSlot {
  id: number;
  lot_id: number;
  lot_name: string;
  code: string;
  is_available: boolean;
  slot_type: string;
  floor: string;
  created_at: string;
}

export interface ParkingSlotsResponse {
  list: ParkingSlot[];
  total: number;
}

const API_BASE_URL = "http://127.0.0.1:8000/backend/parkin/v1";

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const fetchParkingSlots = async (): Promise<ParkingSlotsResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/parking-slots`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching parking slots:", error);
    throw error;
  }
};

export const updateParkingSlot = async (
  id: number,
  updateData: Partial<ParkingSlot>
): Promise<ParkingSlot> => {
  try {
    const response = await fetch(`${API_BASE_URL}/parking-slots/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating parking slot:", error);
    throw error;
  }
};

export const createParkingSlot = async (
  slotData: Omit<ParkingSlot, "id" | "created_at">
): Promise<ParkingSlot> => {
  try {
    const response = await fetch(`${API_BASE_URL}/parking-slots`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(slotData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating parking slot:", error);
    throw error;
  }
};

export const deleteParkingSlot = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/parking-slots/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting parking slot:", error);
    throw error;
  }
};
