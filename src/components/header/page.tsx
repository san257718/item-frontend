"use client";

import {
  BellOutlined,
  CodeSandboxOutlined,
  DashboardOutlined,
  DownOutlined,
  FileMarkdownOutlined,
  SettingOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Flex, Input } from "antd";
import "./index.css";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoverPath, setHoverPath] = useState<string | null>(null);

  const [menuItems, setMenuItems] = useState([
    {
      title: "儀表板",
      url: "/",
      icon: <DashboardOutlined style={{ color: "white" }} />,
      description: "總覽與統計",
    },
    {
      title: "商品管理",
      url: "/products",
      icon: <CodeSandboxOutlined style={{ color: "white" }} />,
      description: "商品庫存管理",
    },
    {
      title: "訂單管理",
      url: "/orders",
      icon: <FileMarkdownOutlined style={{ color: "white" }} />,
      description: "訂單處理與追蹤",
    },
    {
      title: "商品設定",
      url: "/product-settings",
      icon: <SettingOutlined style={{ color: "white" }} />,
      description: "分類與規格設定",
    },
    {
      title: "人員管理",
      url: "/staff",
      icon: <UserOutlined style={{ color: "white" }} />,
      description: "員工權限管理",
    },
  ]);

  return (
    <div className="h-full mx-auto">
      <div className="flex justify-between items-center p-3 space-x-3">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-[#031e49] rounded-lg flex items-center justify-center">
            <CodeSandboxOutlined style={{ fontSize: "28px", color: "white" }} />
          </div>
          <h1 className="bg-linear-to-r bg-clip-text from-[#031e49] to-[#3c83f6] font-extrabold text-transparent text-xl">
            庫存管理
          </h1>

          <nav className="flex items-center space-x-1">
            {menuItems.map((item) => {
              const isHovered = hoverPath === item.url;
              return (
                <div
                  key={item.title}
                  className="bg-linear-to-r from-[#031e49] to-[#06327a] px-4 py-2 rounded-xl flex items-center h-10"
                >
                  <button
                    onMouseOver={() => setHoverPath(item.url)}
                    onMouseLeave={() => setHoverPath(null)}
                  >
                    <div className="text-sm  gap-2 flex justify-center items-center cursor-pointer">
                      {item.icon}
                      <span className="ml-2 text-white">{item.title}</span>
                      {isHovered ? (
                        <UpOutlined
                          className="arrow-up"
                          style={{ color: "white" }}
                        />
                      ) : (
                        <DownOutlined
                          className="arrow-down"
                          style={{ color: "white" }}
                        />
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="flex space-x-3">
          <div>
            <Input
              style={{ width: "300px" }}
              size="large"
              className="text-md"
              placeholder="搜索商品，訂單..."
            />
          </div>
          <div className="flex items-center justify-center space-x-6">
            <button>
              <BellOutlined style={{ fontSize: "20px" }} />
            </button>
            <button>
              <SettingOutlined style={{ fontSize: "20px" }} />
            </button>
            <div className="flex gap-2 justify-center items-center ">
              <UserOutlined
                className="bg-blue-400 rounded-full p-2"
                style={{ color: "white" }}
              />
              <p>管理者</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
