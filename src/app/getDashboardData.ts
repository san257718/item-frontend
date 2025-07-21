import { cookies } from "next/headers";


export async function getDashboardData(tokenToSet?: string) {
  try {
    const cookieStore = await cookies();
    
    // 如果有傳入 token 要設置
    if (tokenToSet) {
      cookieStore.set('token', tokenToSet, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      });
    }

    const tokenCookie = cookieStore.get("token");
    const requestHeaders: HeadersInit = { "Content-Type": "application/json" };

    if (tokenCookie) {
      requestHeaders["Cookie"] = `${tokenCookie.name}=${tokenCookie.value}`;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/total_number_of_products`,
      {
        method: "GET",
        credentials: "include",
        headers: requestHeaders,
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error(`API response status: ${res.status}`);

    return await res.json();
  } catch (error) {
    console.error("❌ dashboard error:", error);
    return [];
  }
}