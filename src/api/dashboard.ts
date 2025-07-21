import jsonApi from "@/util/utilAxions";

export const getDashboard = async () => {
  const response = await jsonApi.get("/api/total_number_of_products");
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await jsonApi.post("/api/login", {
    email,
    password,
  });

  return response;
};

export const logout = async () => {
  const response = await jsonApi.post("/api/logout");
  return response.data;
};
