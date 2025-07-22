import { cookies } from "next/headers";

export async function getDashboardData() {
  try {
    // 獲取服務器端 cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/total_number_of_products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
        credentials: "include",
        cache: "no-store",
      }
    );

    console.log(token);

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // 重新拋出錯誤以便上層處理
  }
}
