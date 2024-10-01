import { DocumentReference } from "firebase/firestore";
import { Result, ResultStatusCode } from "~/types/api/result";

export function handleServiceResult<T>(serviceResult: T): Result {
  let result = {} as Result;

  if (serviceResult instanceof DocumentReference) {
    if (
      (serviceResult !== null || serviceResult !== undefined) &&
      serviceResult.id !== null
    ) {
      result = {
        data: serviceResult,
        success: true,
        message: "Operation done",
        statusCode: ResultStatusCode.SUCCESS,
      };
    }

    if (serviceResult === null || serviceResult === undefined) {
      result = {
        data: serviceResult,
        success: false,
        message: "Operation failed",
        statusCode: ResultStatusCode.BAD_REQUEST,
      };
    }
  }

  if (serviceResult instanceof Error) {
    result = {
      data: serviceResult,
      success: false,
      message: "Eskereeee",
      statusCode: ResultStatusCode.INTERNAL_SERVER_ERROR,
    };
  }

  return result;
}
