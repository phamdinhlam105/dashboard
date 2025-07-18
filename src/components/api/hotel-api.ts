const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}hotel`;

export interface RoomDetailRequest {
  id?: string; // Guid? => string | undefined
  name: string;
  capacity: string;
  included: string;
  price: string;
}

export interface HotelRequest {
  id?: string;
  name: string;
  slug: string;
  address: string;
  thumbnail: string;
  description: string;
  price: string;
  content: string;
  status: number;
  promotionPrice?: number;
  images: string[];
  star: number;
  rule: string;
  shouldUpdateRoom?: boolean;
  roomDetails: RoomDetailRequest[];
}

export const getAllHotel = async () => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const getHotelById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const addNewHotel = async (request: HotelRequest) => {
  try {
    request.id = undefined;
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const updateHotel = async (request: HotelRequest) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const getRoomDetailsByHotelId = async (idHotel: string) => {
  try {
    const response = await fetch(`${API_URL}room-details/${idHotel}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
