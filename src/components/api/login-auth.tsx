import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function loginAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) {
      router.push("/login");
    }
  }, []);
}
