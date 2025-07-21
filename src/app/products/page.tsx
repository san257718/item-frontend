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
  }

  return (
    <div>
      <div>
        <div>{data.length === 0 ? "-" : data.map((item: any) => item.edited_today)}</div>
        <div>{data.length === 0 ? "-" : data.map((item: any) => item.active_users)}</div>
        <div>{data.length === 0 ? "-" : data.map((item: any) => item.pending_orders)}</div>
        <div>{data.length === 0 ? "-" : data.map((item: any) => item.total_number_of_products)}</div>
      </div>
    </div>
  );
}
