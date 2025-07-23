import { getAccessToken } from "@/lib/cookie-handler";

const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}image`;

type ImageRequest = {
  id: string;
  name: string;
  url: string;
};
export const getAllImage = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
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

export const getImageById = async (id: string) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
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

export const addNewImage = async (formData: FormData) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers:{
        "Authorization": `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch {
    return null;
  }
};

export const updateImage = async (request: ImageRequest) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
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

export const deleteImage = async (id: string) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
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
