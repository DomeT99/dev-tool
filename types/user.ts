import type { Authentication } from "./auth";
export type User = Authentication & {
  firstName: string;
  lastName: string;
  apiKey: string;
};
