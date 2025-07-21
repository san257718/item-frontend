import { cookies } from "next/headers";

export async function getDashboardData() {
  try {
    const cookieStore: any = cookies(); // 同步函式
    const tokenCookie = cookieStore.get("token"); // 不需要 await

    const requestHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (tokenCookie) {
      requestHeaders["Cookie"] = `${tokenCookie.name}=${tokenCookie.value}`;
      console.log(
        "從 Server Component 發送的請求頭中包含的 Cookie:",
        requestHeaders["Cookie"]
      );
    } else {
      console.warn("Server Component: No 'token' cookie found to forward.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/total_number_of_products`,
      {
        method: "GET",
        credentials: "include", // ✅ 讓瀏覽器帶 cookie 自動附加
        headers: requestHeaders,
        cache: "no-store", // ⛔ 禁止 fetch cache（避免資料卡住）
      }
    );

    // 若非 200，額外處理
    if (!res.ok) {
      throw new Error(`API response status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("❌ dashboard error:", error);
    return []; // 保持與主流程資料格式一致，避免出錯
  }
}
