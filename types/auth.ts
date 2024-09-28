import { type User } from "./user";

export type Authentication = {
  email: string;
  password: string;
};

export type Registration = Authentication &
  User & {
    confirmPassword: string;
  };

export type Validation = {
  isValid: boolean;
  error?: string;
};
