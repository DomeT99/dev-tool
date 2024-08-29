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
      case FirebaseTypeError.INVALID_CREDENTIALS:
        triggerWarningModal("Invalid credentials");
        break;
      case FirebaseTypeError.EMAIL_ALREADY_IN_USE:
        triggerWarningModal("The email is already in use");
        break;
      case FirebaseTypeError.INVALID_EMAIL:
        triggerWarningModal("The email address is badly formatted");
        break;
      case FirebaseTypeError.USER_DISABLED:
        triggerWarningModal("User disabled");
        break;
      case FirebaseTypeError.USER_NOT_FOUND:
        triggerWarningModal("User not found");
        break;
      case FirebaseTypeError.WRONG_PASSWORD:
        triggerWarningModal(
          "The password is invalid or the user does not have a password."
        );
        break;
      case FirebaseTypeError.OPERATION_NOT_ALLOWED:
        triggerWarningModal("Operation not allowed");
        break;
      case FirebaseTypeError.TOO_MANY_REQUESTS:
        triggerWarningModal("Too many requests");
        break;
      case FirebaseTypeError.NETWORK_REQUEST_FAILED:
        triggerWarningModal("Network request failed");
        break;

      case FirebaseTypeError.UNAUTHORIZED_DOMANIN:
        triggerWarningModal("This domain is not authorized to use Google Auth");
        break;

      case FirebaseTypeError.AUTH_POPUP_CLOSED_BY_USER: // User closed the popup
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
