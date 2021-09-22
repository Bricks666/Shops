import { INPUT_PASSWORD_LOG } from "../../ActionsConstants";

export const inputPasswordLog = (password) => {
  return {
    type: INPUT_PASSWORD_LOG,
    password,
  };
};
