export const dynamic = "force-dynamic";

import { getDashboardData } from "../getDashboardData";

export default async function getStaticProps() {
  const data = await getDashboardData(); // 直接在元件中等待資料獲
  const total_number_of_products = data[0].total_number_of_products;
  const edited_today = data[0].edited_today;
  const active_users = data[0].active_users;
  const pending_orders = data[0].pending_orders;

  return (
    <div>
      <div>{total_number_of_products}</div>
      <div>{edited_today}</div>
      <div>{active_users}</div>
      <div>{pending_orders}</div>
    </div>
  );
}
