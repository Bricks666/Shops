import { stopSubmit } from "redux-form";
import { parseContractError } from "./parseContractError";
import { toValidError } from "./toValidError";

export const dispatchSubmitError = (error, dispatch, formName) => {
  const validError = toValidError(parseContractError(error));
  dispatch(stopSubmit(formName, validError));
};
