import { getAccessToken } from "@/lib/cookie-handler";

const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}combo`;

export interface ComboRequest {
  id?: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  transportation: string;
  view: number;
  tourId?: string;
  hotelId?: string;
}

export const getAllCombo = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};

export const getComboById = async (id: string) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};

export const addNewCombo = async (request: ComboRequest) => {
  try {
    const token = getAccessToken();
    request.id = undefined;
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return true;
  } catch {
    return null;
  }
};

export const updateCombo = async (request: ComboRequest) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return true;
  } catch {
    return null;
  }
};

export const getRoomDetailsByComboId = async (idCombo: string) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}room-details/${idCombo}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
