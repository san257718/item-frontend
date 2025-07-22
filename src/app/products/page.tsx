// app/products/page.tsx
"use client";
import { getDashboard } from "@/api/dashboard";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  // const data = await getDashboard();
  const [data, setData] = useState([{
    total_number_of_products: 0,
    edited_today: 0,
    active_users: 0,
    pending_orders: 0,
  }]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDashboard();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>商品資料</h1>
      <div>{data[0].total_number_of_products}</div>
    </div>
  );
}
