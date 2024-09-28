export const useUserStore = defineStore("user", () => {
  async function getUserData(): Promise<void> {}
  async function createUser(callback: () => void): Promise<void> {}

  return { getUserData, createUser };
});
