import axios from "axios";



export const jsonApi = axios.create({
  // baseURL,
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 5000,
});

jsonApi.interceptors.request.use(
  (config) => {
    console.log("✅ request config:", config); // ← 這裡加上

    return config;
  },
  (error) => {
    console.log("❌ request error:", error); // ← 這裡加上
    return Promise.reject(error);
  }
);

jsonApi.interceptors.response.use(
  (response) => {
    console.log("✅ response:", response); // ← 這裡加上
    return response;
  },
  (error) => {
    console.log("❌ response error:", error); // ← 這裡加上
    return Promise.reject(error);
  }
);

export default jsonApi;
