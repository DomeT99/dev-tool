//Types
export type Warning = {
  isShow: boolean;
  message: string;
};

//Enums
export enum FirebaseTypeError {
  INVALID_EMAIL = "auth/invalid-email",
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  WEAK_PASSWORD = "auth/weak-password",
}
