export async function getDashboardData() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_KEY + "/api/total_number_of_products",
      {
        method: "GET",
        cache: "no-store",
        credentials: "include", // ✅ 必加，否則 cookie 不會送
        headers: {
          "Content-Type": "application/json",
        },
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
