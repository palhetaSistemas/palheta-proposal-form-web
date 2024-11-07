"use server";
import { registerUser } from "@/src/config/user.config";
import { revalidatePath } from "next/cache";

import { type User } from "@/src/app/api/user/data";
export const addUser = async (data: User) => {
  const response = await registerUser(data);
  return response;
};
