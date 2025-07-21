export const dynamic = "force-dynamic";

import {
  CodeSandboxOutlined,
  ExclamationCircleOutlined,
  FileTextOutlined,
  PlusOutlined,
  RiseOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import StateHandling from "@/components/state-handling/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import { getDashboardData } from "@/app/use_server/getDashboardData";

export default async function Dashboard() {
  const data = await getDashboardData();

  const card = [
    {
      title: "總商品數",
      icon: (
        <CodeSandboxOutlined style={{ fontSize: "28px", color: "white" }} />
      ),
      value: data[0].total_number_of_products,
    },
    {
      title: "今日編輯數", // Assuming this corresponds to edited_today
      icon: <FileTextOutlined style={{ fontSize: "28px", color: "white" }} />,
      value: data[0].edited_today,
    },
    {
      title: "活躍用戶",
      icon: <UserOutlined style={{ fontSize: "28px", color: "white" }} />,
      value: data[0].active_users,
    },
    {
      title: "待處理訂單",
      icon: <ShoppingOutlined style={{ fontSize: "28px", color: "white" }} />,
      value: data[0].pending_orders,
    },
  ];

  const orderCard = [
    {
      id: "ORD-001",
      name: "張曉明",
      price: "NT$100",
      date: "2022/11/05",
      status: 1,
    },
    {
      id: "ORD-002",
      name: "李美花",
      price: "NT$100",
      date: "2022/11/05",
      status: 2,
    },
    {
      id: "ORD-003",
      name: "王大偉",
      price: "NT$100",
      date: "2022/11/05",
      status: 3,
    },
  ];

  const stockCard = [
    {
      name: "蘋果 iPhone 15",
      classification: "手機",
      stock: 100,
      lowest: 5,
    },
    {
      name: "Samsung 耳機",
      classification: "配件",
      stock: 3,
      lowest: 15,
    },
    {
      name: "充電線",
      classification: "配件",
      stock: 15,
      lowest: 44,
    },
    {
      name: "筆記型電腦",
      classification: "電腦",
      stock: 2,
      lowest: 18,
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          <div className="flex justify-between ">
            <div>
              <h1 className="bg-linear-to-r bg-clip-text from-text-from to-text-to font-extrabold text-transparent text-3xl">
                儀表板
              </h1>
              <p className="text-muted-foreground mt-1 text-gray-400">
                歡迎回來，查看最新的庫存狀況
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-4 from-addbuttonColorFrom to-addbuttonColorTo bg-gradient-to-r px-4 py-2 rounded-md text-white text-sm cursor-pointer">
                <PlusOutlined />
                新增商品
              </button>
              <button className="flex items-center gap-4 from-buttonColorFrom to-buttonColorTo bg-gradient-to-r px-4 py-2 rounded-md text-white text-sm cursor-pointer">
                <RiseOutlined />
                查看報表
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {card.map((item) => {
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg shadow-sm bg-white"
                >
                  <div className="p-6 flex justify-between ">
                    <div>
                      {item.title}
                      <div className="text-2xl font-bold mt-2">
                        {item.value !== 0 ? item.value : "-"}
                      </div>
                    </div>
                    <div className="bg-[#031e49] flex items-center justify-center h-12 w-12 rounded-xl">
                      {item.icon}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div className="rounded-lg border border-gray-200 hover:shadow-lg shadow-sm transition-all bg-white">
              <div className="flex flex-col space-y-1.5">
                <div className="text-2xl font-semibold leading-none tracking-tight flex items-center p-6">
                  <ShoppingOutlined
                    style={{ fontSize: "20px", marginRight: "0.5rem" }}
                  />
                  <h3>最近訂單</h3>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    {orderCard.map((item) => {
                      return (
                        <div key={item.id} className="space-y-4">
                          <div className="flex p-3 rounded-lg bg-[#f1f5f94d]">
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <span>{item.id}</span>
                                <StateHandling orderStatus={item.status} />
                              </div>
                              <div className="text-sm text-gray-400 flex justify-between">
                                <span>{item.name}</span>
                                <span>{item.date}</span>
                              </div>
                              <div className="text-sm text-blue-400">
                                <span>{item.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 hover:shadow-lg shadow-sm transition-all bg-white">
              <div className="flex flex-col space-y-1.5">
                <div className="text-2xl font-semibold leading-none tracking-tight flex items-center p-6">
                  <ExclamationCircleOutlined
                    style={{
                      fontSize: "20px",
                      marginRight: "0.5rem",
                      color: "#f59f0a",
                    }}
                  />
                  <h3 className="text-[#f59f0a]">庫存不足警告</h3>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    {stockCard.map((item) => {
                      return (
                        <div key={item.name}>
                          <div className="flex  p-3 rounded-lg bg-muted/30 bg-[#f9f6f1] border border-[#f5eee0]">
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <span>{item.name}</span>
                              </div>
                              <div className="text-sm text-gray-400 flex justify-between">
                                <span>{item.classification}</span>
                              </div>
                              <div className="flex text-sm">
                                <span className="mr-2">庫存: </span>
                                <span
                                  className={
                                    item.lowest > item.stock
                                      ? "text-red-600"
                                      : "text-gray-600"
                                  }
                                >
                                  {item.stock}
                                </span>
                                <span className="mx-2">/</span>
                                <span className="text-gray-400">
                                  最低庫存: {item.lowest}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
