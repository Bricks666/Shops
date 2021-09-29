import { CHANGE_CAS_MARK } from "../../ActionsConstants";

export const changeMark = (address, complainId, changes, changer) => {
  return {
    type: CHANGE_CAS_MARK,
    address,
    complainId,
    changes,
    changer,
  };
};
