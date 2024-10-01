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

    if (!isNull(error.value)) {
      console.log(error);
    }

    if (isTrue(data.value?.data.success)) {
      callback();
    } else {
      throw new Error(data.value?.data.message);
    }
  }

  return { user, getUserData, createUserData };
});
