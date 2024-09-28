import { Result } from "~/types/api/result";
import { User } from "~/types/user";

export async function tryCreateUserData(model: User): Promise<Result> {
  try {
    let result = {} as Result;

    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}
