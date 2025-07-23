import { getAccessToken } from "@/lib/cookie-handler";

const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}booking`;

export const getAllBooking = async () => {
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
