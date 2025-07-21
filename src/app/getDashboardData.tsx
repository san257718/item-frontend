import { cookies } from "next/headers";

export async function getDashboardData() {
  try {
    const cookieStore = cookies(); // 獲取從客戶端傳入的所有 cookies
    const tokenCookie = (await cookieStore).get("token"); // 獲取名為 'token' 的 cooki
    const requestHeaders: HeadersInit = {
      // 定義一個新的 Headers 物件
      "Content-Type": "application/json",
    };

    if (tokenCookie) {
      // 如果 token Cookie 存在，手動將其添加到請求頭的 'Cookie' 字段中
      // ⚠️ 注意：這裡不再需要 `credentials: "include"`，因為我們手動設置了 `Cookie` 頭
      requestHeaders["Cookie"] = `${tokenCookie.name}=${tokenCookie.value}`;
      console.log(
        "從 Server Component 發送的請求頭中包含的 Cookie:",
        requestHeaders["Cookie"]
      ); // 前端 Next.js 伺服器日誌
    } else {
      console.warn("Server Component: No 'token' cookie found to forward.");
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/total_number_of_products",
      {
        cache: "no-store",
        headers: requestHeaders,
      }
    );

    return await res.json();
  } catch (error) {
    console.error("❌ dashboard error:", error);
    return {
      data: [],
      user: null,
    };
  }
}
