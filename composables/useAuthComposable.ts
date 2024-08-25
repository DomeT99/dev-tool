import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import type { Registration, Validation } from "~/types/auth";
export const useAuthComposable = () => {
  const auth = useFirebaseAuth();
  const user = useCurrentUser();
  const router = useRouter();

  const registration = ref<Registration>({
    email: "",
    password: "",
    confirmPassword: "",
    apiKey: "",
  });

  onMounted(() => {
    if (isNull(user.value)) {
      if (router.currentRoute.value.name === "login") {
        navigateTo("/login");
      }

      if (router.currentRoute.value.name === "signup") {
        navigateTo("/signup");
      }
    }

    if (!isNull(user.value)) {
      navigateTo("/");
    }
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
