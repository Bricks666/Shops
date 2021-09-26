import { ADD_USER } from "../../ActionsConstants";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};
