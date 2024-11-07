import { api } from "@/src/config/axios.config";
import { type User } from "@/src/app/api/user/data";
export const registerUser = async (data: User) => {
  try {
    const response = await api.post("/user/register", data);

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
