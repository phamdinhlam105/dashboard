import { getAccessToken } from "@/lib/cookie-handler";
import { BannerModel } from "../banner/banner-model/banner-model";
const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}banner`;

export const getCurrentTopBanner = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(
      `${API_URL}/b1a5eaa1-3b2a-4d4f-a0c6-001122334455`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};

export const updateBanner = async (request: BannerModel) => {
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
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
export const getCurrentPromotionBanner = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(
      `${API_URL}/c2b6fbb2-4c3b-5e5f-b1d7-556677889900`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
