import { INPUT_NEW_MARK } from "../../ActionsConstants";

export const inputNewMark = (mark) => {
  return {
    type: INPUT_NEW_MARK,
    mark,
  };
};
