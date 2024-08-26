import type { FirebaseError } from "firebase/app";
import { FirebaseTypeError, type Warning } from "~/types/error";

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

  function handleFirebaseError(error: FirebaseError) {
    switch (error.code) {
      case FirebaseTypeError.WEAK_PASSWORD:
        triggerWarningModal("Password should be at least 6 characters");
        break;
      case FirebaseTypeError.EMAIL_ALREADY_IN_USE:
        triggerWarningModal("Email already in use");
        break;
      case FirebaseTypeError.INVALID_EMAIL:
        triggerWarningModal("Invalid email");
        break;
      default:
        triggerWarningModal("Unknown error");
        break;
    }
  }

  return {
    warningData,

    triggerWarningModal,
    closeWarningModal,
    handleFirebaseError,
  };
});
