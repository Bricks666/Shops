import { reset, startSubmit, stopSubmit } from "redux-form";
import { api } from "../../API/API";

export const setShopThunk = (address, login, password, city) => {
  return async (dispatch, getState) => {
    try {

      dispatch(startSubmit("addShop"));
      await api.addShop(address, city, login, password);
      dispatch(reset("addShop"));
    } catch (e) {
      console.log(e.message);
      dispatch(stopSubmit("addShop"));
    }
  };
};
