import { INPUT_LOGIN_REG } from "../../ActionsConstants";

export const inputLoginReg = (login) => {
  return {
    type: INPUT_LOGIN_REG,
    login,
  };
};
