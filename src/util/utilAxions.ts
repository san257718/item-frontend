// utilAxios.tsx (Simplified for testing)
import axios from "axios";


const jsonApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 5000,
});

// 攔截器保持不變
jsonApi.interceptors.request.use(
  (config) => {
    // 在伺服器端，這裡的 config.headers 應該會自動包含來自原始請求的 Cookie
    // 如果你需要顯式設定，可以使用 Next.js headers() 函數 (不常用於內部 API 請求)
    console.log("✅ Request config (Server):", {
      baseURL: config.baseURL,
      url: config.url,
      method: config.method,
      headers: config.headers, // 檢查這裡是否包含 Cookie
    });
    return config;
  },
  (error) => {
    console.log("❌ Request error (Server):", error);
    return Promise.reject(error);
  }
);

jsonApi.interceptors.response.use(
  (response) => {
    console.log("✅ Response (Server):", {
      status: response.status,
      statusText: response.statusText,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.log("❌ Response error (Server):", {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
    });
    return Promise.reject(error);
  }
);

export default jsonApi;
