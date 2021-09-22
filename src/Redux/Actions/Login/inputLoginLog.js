import { INPUT_LOGIN_LOG } from "../../ActionsConstants";

export const inputLoginLog = (login) => {
  return {
    type: INPUT_LOGIN_LOG,
    login,
  };
};
