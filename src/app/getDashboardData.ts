import { cookies } from "next/headers";

export async function getDashboardData() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const requestHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Cookie: `token=${token}`,
  };
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/total_number_of_products`,
      {
        method: "GET",
        headers: requestHeaders,
        credentials: "include", // ✅ 讓瀏覽器帶 cookie 自動附加
        cache: "no-store", // ⛔ 禁止 fetch cache（避免資料卡住）
      }
    );

    if (!res.ok) throw new Error("Request failed");
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
