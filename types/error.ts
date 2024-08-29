//Types
export type Warning = {
  isShow: boolean;
  message: string;
};

//Enums
export enum FirebaseTypeError {
  INVALID_EMAIL = "auth/invalid-email",
  INVALID_CREDENTIALS = "auth/invalid-credential",
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  WEAK_PASSWORD = "auth/weak-password",
  USER_DISABLED = "auth/user-disabled",
  USER_NOT_FOUND = "auth/user-not-found",
  WRONG_PASSWORD = "auth/wrong-password",
  OPERATION_NOT_ALLOWED = "auth/operation-not-allowed",
  TOO_MANY_REQUESTS = "auth/too-many-requests",
  NETWORK_REQUEST_FAILED = "auth/network-request-failed",
  UNAUTHORIZED_DOMANIN = "auth/unauthorized-domain",

  AUTH_POPUP_CLOSED_BY_USER = "auth/popup-closed-by-user",
}
