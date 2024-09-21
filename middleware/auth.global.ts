import type { FirebaseError } from "firebase/app";
import type { IdTokenResult } from "firebase/auth";
import { useErrorStore } from "~/store/errorStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  debugger;
  const { handleFirebaseError } = useErrorStore();
  const user = await getCurrentUser();

  if (
    user === null &&
    to.fullPath !== "/login" &&
    to.fullPath !== "/signup" &&
    to.fullPath !== "/login/reset"
  ) {
    return navigateTo("/login");
  }
  user
    ?.getIdTokenResult(true)
    .then((tokenData: IdTokenResult) => {
      const expirationDate = new Date(tokenData!.expirationTime).getTime();

      if (expirationDate < Date.now()) {
        return navigateTo("/login");
      }
      return navigateTo("/");
    })
    .catch((error: FirebaseError) => {
      handleFirebaseError(error);
    });
});
