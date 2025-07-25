import { getAccessToken } from "@/lib/cookie-handler";
import { PostStatus } from "./enum";

const API_URL = `${process.env.NEXT_PUBLIC_API_LINK}post`;

export interface PostRequest {
  id?: string; // Guid? => string | undefined
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail: string;
  status: PostStatus;
  author?: string;
}
export const getAllPost = async () => {
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

export const getPostById = async (id: string) => {
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

export const addNewPost = async (request: PostRequest) => {
  try {
    const token = getAccessToken();
    request.id = undefined;
    const response = await fetch(`${API_URL}`, {
      method: "POST",
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

export const updatePost = async (request: PostRequest) => {
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

export const deletePost = async (id: string) => {
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
