import { CHANGE_MARK } from "../../ActionsConstants";

export const changeMark = (address, complainId, changes, changer) => {
  return {
    type: CHANGE_MARK,
    address,
    complainId,
    changes,
    changer,
  };
};
