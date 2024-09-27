export type Authentication = {
  email: string;
  password: string;
};

export type Registration = Authentication & {
  firstName: string;
  lastName: string;
  confirmPassword: string;
  apiKey: string;
};

export type Validation = {
  isValid: boolean;
  error?: string;
};
