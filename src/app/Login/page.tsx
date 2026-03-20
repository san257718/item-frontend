"use client";
import "@ant-design/v5-patch-for-react-19";

import { login } from "@/api/dashboard";
import Button from "antd/es/button";
import { useRouter } from "next/navigation";
import { Input } from "antd";
import { useState } from "react";
export default function Login() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userNameLogin = ($event: any) => {
    const userName = $event.target.value;
    setUserName(userName);
  };

  const userPasswordLogin = ($event: any) => {
    const password = $event.target.value;
    setPassword(password);
  };

  const handleLogin = async (userName: string, password: string) => {
    try {
      const response = await login(userName, password);
      localStorage.setItem("token", response.data.token);
      router.push("/Dashboard");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-full flex justify-center items-center">
      <div className="max-w-md w-full flex justify-center bg-[#fffc] rounded-lg shadow-xl">
        <div className="w-full">
          <div className="flex flex-col text-center space-y-4 p-6">
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 bg-[#dbeafe] flex items-center justify-center rounded-full">
                {/* <ShieldIcon fontSize="large" color="action" /> */}
              </div>
            </div>
            <h3 className="tracking-tight font-bold text-2xl text-gray-800">
              庫存管理系統
            </h3>
            <p className="text-sm text-gray-600">請輸入您的帳號密碼登入系統</p>
          </div>
          <div className="flex flex-col space-y-4 p-6 pt-0">
            <div className="w-full flex justify-center items-center">
              <Input
                placeholder="userName"
                className="w-24"
                onChange={userNameLogin}
              />
            </div>
            <div className="w-full flex justify-center">
              <Input.Password
                placeholder="password"
                className="w-24"
                onChange={userPasswordLogin}
              />
            </div>
            <div className="flex justify-center">
              <Button
                className="w-40"
                type="primary"
                onClick={() => handleLogin(userName, password)}
              >
                登入
              </Button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4>測試帳號</h4>
              <p>帳號: admin123@ggg.com</p>
              <p>密碼: admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
