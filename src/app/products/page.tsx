import { getDashboardData } from "../use_server/getDashboardData";

export const dynamic = "force-dynamic";
export default async function Products() {
  let data;
  try {
    const DashboardData = await getDashboardData();
    data = DashboardData;
    console.log(data);
  } catch (error) {
    console.log(error);

    return {
      total_number_of_products: "-",
      edited_today: "-",
      active_users: "-",
      pending_orders: "-",
    };
  }

  return (
    <div>
      <div>{data.total_number_of_products}</div>
    </div>
  );
}
