import { changeRole } from "../Account/changeRole";
import { setUnsubscribe } from "../Contract/setUnsubscribe";
import { newRole } from "../Account/newRole";
import { changeMark } from "../Shops/changeMark";
import { requestNewCAS } from "../Shops/requestNewCAS";

export const subscribeThunk = () => {
  return (dispatch, getState) => {
    const contract = getState().contract;
    const address = getState().user.address;

    const unsubscribe = [
      contract.events.ChangeRole(
        {
          filter: {
            user: address,
          },
        },
        (error, response) => dispatch(changeRole(response.returnValues.role))
      ),
      contract.events.NewRole(
        {
          filter: {
            user: address,
          },
        },
        (error, response) => dispatch(newRole(response.returnValues.role))
      ),
      contract.events.MarkComplaint((error, { returnValues }) =>
        dispatch(
          changeMark(
            returnValues.shopAddress,
            returnValues.complaintsId,
            returnValues.mark,
            returnValues.changer
          )
        )
      ),
      contract.events.NewComplaint((error, { returnValues }) => {
        ;
        dispatch(
          requestNewCAS(returnValues.bookAddress, returnValues.complaintsId)
        );
      }),
    ];

    dispatch(setUnsubscribe(unsubscribe));
  };
};
