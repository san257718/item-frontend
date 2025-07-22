import utilAxios from "@/app/lib/utilAxios";

export const getUsers = async () => {
  const response = await utilAxios.get("/api/");
  return response.data;
};

export const getDashboard = async () => {
  const response = await utilAxios.get("/api/total_number_of_products");
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await utilAxios.post("/api/login", {
    email,
    password,
  });

  return response;
};

export const logout = async () => {
  const response = await utilAxios.post("/api/logout");
  return response.data;
};
