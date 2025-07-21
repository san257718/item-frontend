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
        {data.length > 0 ? (
          data.map((item: { total_number_of_products: number; edited_today: number; active_users: number; pending_orders: number; }, index: number) => {
            return (
              <div key={index}>
                <div>{item.total_number_of_products}</div>
                <div>{item.edited_today}</div>
                <div>{item.active_users}</div>
                <div>{item.pending_orders}</div>
              </div>
            );
          })
        ) : (
          <div>暫無商品</div>
        )}
      </div>
    </div>
  );
}
