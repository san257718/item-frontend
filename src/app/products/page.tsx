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
        <div> {data[0].edited_today}</div>
        <div>{data[0].active_users}</div>
        <div>{data[0].pending_orders}</div>
        <div>{data[0].total_number_of_products}</div>
      </div>
    </div>
  );
}
