import {
  ADD_FREE_ADDRESS,
  REMOVE_FREE_ADDRESS,
  SET_FREE_ADDRESSES,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const freeAddresses = (state = initialState.freeAddresses, action) => {
  switch (action.type) {
    case SET_FREE_ADDRESSES: {
      return action.addresses.filter((address) => address !== undefined);
    }
    case ADD_FREE_ADDRESS: {
      return [...state, action.address];
    }
    case REMOVE_FREE_ADDRESS: {
      return state.filter((el) => el.address !== action.address);
    }
    default: {
      return state;
    }
  }
};
