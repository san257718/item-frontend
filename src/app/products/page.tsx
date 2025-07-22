// app/products/page.tsx
export const dynamic = "force-dynamic"; // 強制渲染

import { getDashboardData } from "../getDashboardData";
export default async function ProductsPage() {
   const data = await getDashboardData();

  if(!data) {
    console.log(data);
    return <div>資料載入失敗</div>;
  }


  return (
    <div>
      <h1>商品資料</h1>
      <div>{data[0].total_number_of_products}</div>
    </div>
  );
}
