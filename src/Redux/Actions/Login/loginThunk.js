import { startLogin } from "./startLogin";
import { abortLogin } from "./abortLogin";
import { logged } from "./logged";
import { accountInfoThunk } from "../Account/accountInfoThunk";
import { changeRole } from "../Account/changeRole";
import { setUnsubscribe } from "../Contract/setUnsubscribe";
import { newRole } from "../Account/newRole";
import { changeMark } from "../Shops/changeMark";
import {requestNewCAS} from '../Shops/requestNewCAS'

export const loginThunk = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const login = state.login.login;
    const password = state.login.password;
    dispatch(startLogin());

    try {
      const result = await state.contract.methods
        .LoginUser(login, password)
        .call({ from: state.user.address });

      if (result !== true) {
        throw new Error("Что то пошло не так");
      }

      dispatch(logged());
      dispatch(accountInfoThunk());

      const unsubscribe = [
        state.contract.events.ChangeRole(
          {
            filter: {
              user: state.user.address,
            },
          },
          (error, response) => dispatch(changeRole(response.returnValues.role))
        ),
        state.contract.events.NewRole(
          {
            filter: {
              user: state.user.address,
            },
          },
          (error, response) => dispatch(newRole(response.returnValues.role))
        ),
        state.contract.events.MarkComplaint((error, { returnValues }) =>
          dispatch(
            changeMark(
              returnValues.shopAddress,
              returnValues.complaintsId,
              returnValues.mark
            )
          )
        ),
        state.contract.events.NewComplaint((error, { returnValues }) => {
          dispatch(
            requestNewCAS(returnValues.bookAddress, returnValues.complaintsId)
          );
        }),
      ];

      dispatch(setUnsubscribe(unsubscribe));
    } catch (e) {
      dispatch(abortLogin());
    }
  };
};
