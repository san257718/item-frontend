import { getDashboardData } from "../use_server/getDashboardData";

export const dynamic = "force-dynamic";
export default async function Products() {
  const data = await getDashboardData();

  return (
    <div>
      <div>{data[0].total_number_of_products}</div>
    </div>
  );
}
