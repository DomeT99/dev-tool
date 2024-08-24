import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
export const useAuthComposable = () => {
  const auth = useFirebaseAuth();
  const user = useCurrentUser();

  onMounted(() => {
    if (isNull(user.value)) {
      navigateTo("/login");
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

  return {
    trySignInWithGoogle,
    trySignInOut,
  };
};
