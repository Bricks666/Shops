import { api } from "../../API/API";
import { setFreeAddresses } from "../../Actions/FreeAddresses/setFreeAddresses";
import { toValidFreeAddress } from "../../Service/toValidFreeAddress";
import { subscribeNewFreeAddress } from "../Subscribes/subscribeNewFreeAddress";
import { subscribeRemoveFreeAddress } from "../Subscribes/subscribeRemoveFreeAddress";

export const requestFreeAddresses = () => {
  return async (dispatch) => {
    try {
      const addresses = await api.getFreeAddresses();

      dispatch(setFreeAddresses(addresses.map(toValidFreeAddress)));

      dispatch(subscribeNewFreeAddress());
      dispatch(subscribeRemoveFreeAddress());
    } catch (e) {
      console.log(e.message);
    }
  };
};
