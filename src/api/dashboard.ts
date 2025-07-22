import serverAxios from "@/app/lib/serverAxios";
import clientAxios from "@/app/lib/clientAxios";

export const getDashboard = async () => {
  const response = await serverAxios.get("/api/total_number_of_products");
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await clientAxios.post("/api/login", {
    email,
    password,
  });

  return response;
};

export const logout = async () => {
  const response = await serverAxios.post("/api/logout");
  return response.data;
};
