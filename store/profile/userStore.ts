export const useUserStore = defineStore("user", () => {
  async function getUserData(): Promise<void> {}
  async function createUserData(callback: () => void): Promise<void> {}

  return { getUserData, createUserData };
});
