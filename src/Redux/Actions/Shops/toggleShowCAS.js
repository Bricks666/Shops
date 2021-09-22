import { SHOW_COMPLAINS_AND_SUGGESTIONS } from "../../ActionsConstants";

export const toggleShowCAS = (address, shopId, isSalesman) => {
  return {
    type: SHOW_COMPLAINS_AND_SUGGESTIONS,
    address,
    shopId,
    isSalesman,
  };
};
