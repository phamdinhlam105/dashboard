import { getAccessToken } from "@/lib/cookie-handler";
import { BannerModel } from "../banner/banner-model/banner-model";
const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}banner`;

export const getCurrentTopBanner = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}/top-banner`, {
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

export const updateBanner = async (request: BannerModel) => {
  try {
    const token = getAccessToken();
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
export const getCurrentPromotionBanner = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}/promotion-banner`, {
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
