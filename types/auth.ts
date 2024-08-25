export type Authentication = {
  email: string;
  password: string;
};

export type Registration = Authentication & {
  confirmPassword: string;
  apiKey: string;
};

export type Validation = {
  isValid: boolean;
  error?: string;
};
