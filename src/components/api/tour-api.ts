import { getAccessToken } from "@/lib/cookie-handler";

const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}tour`;

export interface TourRequest {
  id?: string; // Guid => string (optional)
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
  startingPlace: string;
  images: string[]; // List<string> => string[]
  schedule: string;
  scheduleDetail: string;
  price?: string; // decimal? => number (optional)
  status: number;

  // Tour Detail
  location: string;
  food: string;
  suitablePerson: string;
  idealTime: string;
  transportation: string;
  promotion: string;
}

export const getAllTour = async () => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`
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

export const getTourById = async (id: string) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`
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

export const addNewTour = async (request: TourRequest) => {
  try {
    request.id = undefined;
    const token = getAccessToken();
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${token}`
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

export const updateTour = async (request: TourRequest) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
       "Authorization":`Bearer ${token}`
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

export const deleteTour = async (id: string) => {
  try {
    const token = getAccessToken();
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${token}`
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return true;
  } catch {
    return null;
  }
};
