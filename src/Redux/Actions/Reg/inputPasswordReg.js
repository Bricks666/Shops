import { INPUT_PASSWORD_REG } from "../../ActionsConstants";

export const inputPasswordReg = (password) => {
  return {
    type: INPUT_PASSWORD_REG,
    password,
  };
};
