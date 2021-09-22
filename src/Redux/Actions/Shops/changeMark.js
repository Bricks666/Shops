import { CHANGE_MARK } from "../../ActionsConstants";

export const changeMark = (address, complainId, changes) => {

  return {
    type: CHANGE_MARK,
    address,
    complainId,
    changes,
  };
};
