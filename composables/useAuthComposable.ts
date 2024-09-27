import type { FirebaseError } from "firebase/app";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
} from "firebase/auth";
import { useErrorStore } from "~/store/errorStore";
import { useLoadingStore } from "~/store/loadingStore";
import type { Registration, Validation } from "~/types/auth";
export const useAuthComposable = () => {
  const { triggerWarningModal, handleFirebaseError } = useErrorStore();
  const { handleLoading } = useLoadingStore();
  const auth = useFirebaseAuth();

  const registration = ref<Registration>({
    firstName: "",
    lastName: "",
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
      .catch((error: FirebaseError) => {
        handleFirebaseError(error);
      });
  }

  function trySigninWithEmailAndPassword(): void {
    const validate = _validateCredentials();

    if (validate.isValid === false) {
      triggerWarningModal(validate.error!);
      return;
    }

    const { email, password } = registration.value;

    handleLoading(() =>
      signInWithEmailAndPassword(auth!, email, password)
        .then((result) => {
          if (isNull(result.user)) {
            navigateTo("/login");
          }

          navigateTo("/");
        })
        .catch((error: FirebaseError) => {
          handleFirebaseError(error);
        })
    );
  }

  function trySignInOut(): void {
    signOut(auth!)
      .then(() => {
        navigateTo("/login");
      })
      .catch((error: FirebaseError) => {
        handleFirebaseError(error);
      });
  }

  function tryCreateUserWithEmailAndPassword(): void {
    const validate = _validateRegistration();

    if (validate.isValid === false) {
      triggerWarningModal(validate.error!);
      return;
    }

    const { email, password } = registration.value;

    handleLoading(() =>
      createUserWithEmailAndPassword(auth!, email, password)
        .then((result) => {
          if (isNull(result.user)) {
            navigateTo("/signup");
          }

          navigateTo("/");
        })
        .catch((error: FirebaseError) => {
          handleFirebaseError(error);
        })
    );
  }

  function tryResetPasswordWithEmail(): void {
    const { email } = registration.value;

    sendPasswordResetEmail(auth!, email)
      .then(() => {
        navigateTo("/login");
      })
      .catch((error: FirebaseError) => {
        handleFirebaseError(error);
      });
  }

  function _validateRegistration(): Validation {
    const { firstName, lastName, password, confirmPassword, apiKey } =
      registration.value;

    if (isEmptyString(firstName) || isNull(firstName)) {
      return {
        isValid: false,
        error: "First name is required",
      };
    }

    if (isEmptyString(lastName) || isNull(lastName)) {
      return {
        isValid: false,
        error: "Last name is required",
      };
    }

    if (_validateCredentials().isValid === false) {
      return _validateCredentials();
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

  function _validateCredentials(): Validation {
    const { email, password } = registration.value;

    if (isEmptyString(email) || isNull(email)) {
      return {
        isValid: false,
        error: "Email is required",
      };
    } else {
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validateRegex = emailRegex.test(email);

      if (validateRegex === false) {
        return {
          isValid: false,
          error: "The email format you entered is invalid",
        };
      }
    }

    if (isEmptyString(password) || isNull(password)) {
      return {
        isValid: false,
        error: "Password is required",
      };
    }

    return {
      isValid: true,
    };
  }

  return {
    registration,

    trySignInWithGoogle,
    trySigninWithEmailAndPassword,
    trySignInOut,
    tryCreateUserWithEmailAndPassword,
    tryResetPasswordWithEmail,
  };
};
