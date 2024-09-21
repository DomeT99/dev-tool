export const useLoadingStore = defineStore("loading", () => {
  const isLoading = ref<boolean>(false);

  function handleLoading(callback: () => Promise<void>): void {
    _handleLoadingFlag();

    callback().finally(() => _handleLoadingFlag());
  }

  function _handleLoadingFlag(): void {
    isLoading.value = !isLoading.value;
  }
  return { isLoading, handleLoading };
});
