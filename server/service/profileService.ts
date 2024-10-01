import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { db } from "~/firebase/config";
import { Result } from "~/types/api/result";
import { User } from "~/types/user";
import { handleServiceResult } from "../utility/handleResult";

export async function tryCreateUserData(model: User): Promise<Result> {
  try {
    let result = {} as Result;
    let response = await addDoc(collection(db, "Profiles"), model);

    result =
      handleServiceResult<DocumentReference<DocumentData, DocumentData>>(
        response
      );

    return result;
  } catch (error: any) {
    return handleServiceResult<Error>(error);
  }
}
