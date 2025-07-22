// lib/utilAxios.ts
"use server";

import axios from "axios";
import { cookies, headers } from "next/headers";

// 創建基本實例
const serverAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// 伺服器端請求攔截器
serverAxios.interceptors.request.use(async(config) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  config.headers.Cookie = `token=${token}`;
  return config;
})

// 響應攔截器保持不變
serverAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("請求超時");
    }
    return Promise.reject(error);
  }
);

export default serverAxios;
