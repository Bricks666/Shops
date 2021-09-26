import { addUser } from "../../Actions/Users/addUser";
import { toValidUser } from "../../Service/toValidUser";

export const loadNewUser = (userAddress) => {
  return async (dispatch, getState) => {
    try {
      const user = await getState().contract.methods.user(userAddress).call();

      dispatch(addUser(toValidUser(user)));
    } catch (e) {
      console.log(e.message);
    }
  };
};
