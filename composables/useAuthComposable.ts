import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useErrorStore } from "~/store/errorStore";
import type { Registration, Validation } from "~/types/auth";
export const useAuthComposable = () => {
  const { triggerWarningModal } = useErrorStore();
  const auth = useFirebaseAuth();

  const registration = ref<Registration>({
    email: "",
    password: "",
    confirmPassword: "",
    apiKey: "",
  });

  function trySignInWithGoogle(): void {
    signInWithPopup(auth!, new GoogleAuthProvider())
      .then((result) => {
        if (isNull(result.user)) {
          navigateTo("/login");
        }

        navigateTo("/");
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  function trySignInOut(): void {
    signOut(auth!)
      .then(() => {
        navigateTo("/login");
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  function tryCreateUserWithEmailAndPassword(): void {
    const validate = _validateRegistration();

    if (validate.isValid === false) {
      triggerWarningModal(validate.error!);
      return;
    }

    const { email, password } = registration.value;

    createUserWithEmailAndPassword(auth!, email, password)
      .then((result) => {
        if (isNull(result.user)) {
          navigateTo("/signup");
        }

        navigateTo("/");
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  function _validateRegistration(): Validation {
    const { email, password, confirmPassword, apiKey } = registration.value;

    if (isEmptyString(email) || isNull(email)) {
      return {
        isValid: false,
        error: "Email is required",
      };
    }

    if (isEmptyString(password) || isNull(password)) {
      return {
        isValid: false,
        error: "Password is required",
      };
    }

    if (isEmptyString(confirmPassword) || isNull(confirmPassword)) {
      return {
        isValid: false,
        error: "Confirm password is required",
      };
    }

    if (password !== confirmPassword) {
      return {
        isValid: false,
        error: "Passwords do not match",
      };
    }

    if (isEmptyString(apiKey) || isNull(apiKey)) {
      return {
        isValid: false,
        error: "API key is required",
      };
    }

    return {
      isValid: true,
    };
  }

  return {
    registration,

    trySignInWithGoogle,
    trySignInOut,
    tryCreateUserWithEmailAndPassword,
  };
};
