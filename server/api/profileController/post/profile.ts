import { tryCreateUserData } from "~/server/service/profileService";
import { User } from "~/types/user";

export default defineEventHandler(async (event) => {
  const result = await tryCreateUserData(event as unknown as User);

  return {
    data: result,
  };
});
