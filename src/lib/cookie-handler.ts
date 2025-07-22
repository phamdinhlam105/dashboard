import Cookies from "js-cookie";

export function setAccessToken(
  name: string,
  value: string,
  options: Cookies.CookieAttributes = {}
) {
  Cookies.set(name, value, {
    path: "/",
    sameSite: "lax",
    expires: 7,
    ...options,
  });
}

export function getAccessToken(): string | undefined {
  return Cookies.get("access_token");
}

export function removeAccessToken() {
  Cookies.remove("access_token", { path: "/" });
}
