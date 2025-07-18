"use server";

export async function getDashboardData() {
  try {
    const res = await fetch(
      "http://localhost:5000/api/total_number_of_products"
    );

    const json = await res.json();
    console.log("✅ dashboard json:", json); // ← 這裡加上

    return json;
  } catch (error) {
    
    console.error("❌ dashboard error:", error); // ← 這裡加上

     return {
      _id: "",
      total_number_of_products: 0,
      edited_today: 0,
      active_users: 0,
      pending_orders: 0,
    };
  }
}
