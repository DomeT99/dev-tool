import type { Warning } from "~/types/error";

export const useErrorStore = defineStore("error", () => {
  const warningData = ref<Warning>({
    isShow: false,
    message: "",
  });

  function triggerWarningModal(message: string) {
    warningData.value.isShow = true;
    warningData.value.message = message;
  }

  function closeWarningModal() {
    warningData.value.isShow = false;
    warningData.value.message = "";
  }

  return {
    warningData,

    triggerWarningModal,
    closeWarningModal,
  };
});
