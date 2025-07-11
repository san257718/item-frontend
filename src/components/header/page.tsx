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
import Link from "next/link";
import headerList from "@/app/router/page";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoverPath, setHoverPath] = useState<string | null>(null);


  return (
    <div className="h-full mx-auto bg-white">
      <div className="flex justify-between items-center p-3 space-x-3">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-[#031e49] rounded-lg flex items-center justify-center">
            <CodeSandboxOutlined style={{ fontSize: "28px", color: "white" }} />
          </div>
          <h1 className="bg-linear-to-r bg-clip-text from-[#031e49] to-[#3c83f6] font-extrabold text-transparent text-xl">
            庫存管理
          </h1>

          <nav className="flex items-center space-x-1">
            {headerList.map((item) => {
              const isHovered = hoverPath === item.url;
              return (
                <div
                  className="relative"
                  key={item.title}
                  onMouseOver={() => setHoverPath(item.url)}
                  onMouseLeave={() => setHoverPath(null)}
                >
                  <div className="bg-linear-to-r from-[#031e49] to-[#06327a] px-4 py-2 rounded-xl flex items-center h- mb-2">
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
                  </div>

                  {isHovered ? (
                    <button className="absolute listCard bg-white duration-200 border border-gray-200 p-1 w-48">
                      {item.children?.map((child) => {
                        return (
                          <div key={child.title}>
                            <Link href={child.url}>
                              <div className="flex items-center p-2 gap-2">
                                <div>{child.icon}</div>
                                <div className="flex flex-col text-left text-sm ">
                                  <span>{child.title}</span>
                                  <span className="text-gray-500">
                                    {child.description}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </button>
                  ) : null}
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
