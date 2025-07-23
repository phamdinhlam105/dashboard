import { setAccessToken } from "@/lib/cookie-handler";

const API_URL = `https://viettriptourist.com/api/login`;

export const login = async (userName: string, password: string) => {
  try {
    const request = {
      userName:userName,
      password:password
    }
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
    setAccessToken("access_token", data.token);
    return true;
  } catch {
    return null;
  }
};
