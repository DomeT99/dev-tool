import type { User } from "~/types/user";

export const useUserStore = defineStore("user", () => {
  const user = ref<User>({
    firstName: "",
    lastName: "",
    apiKey: "",
    email: "",
    password: "",
  });

  async function getUserData(): Promise<void> {}
  async function createUserData(callback: () => void): Promise<void> {
    const { data, error } = await useFetch(
      "/api/profileController/post/profile",
      {
        method: "POST",
        body: user.value,
      }
    );

    if (isTrue(error.value)) {
      throw new Error(error.value?.message);
    }

    if (isTrue(data.value?.data.success)) {
      callback();
    }
  }

  return { user, getUserData, createUserData };
});
