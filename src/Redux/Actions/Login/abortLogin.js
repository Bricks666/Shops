import { ABORT_LOGIN } from "../../ActionsConstants";

export const abortLogin = () => {
  return {
    type: ABORT_LOGIN,
  };
};
