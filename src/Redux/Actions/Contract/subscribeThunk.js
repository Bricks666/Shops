import { changeRole } from "../Account/changeRole";
import { setUnsubscribe } from "../Contract/setUnsubscribe";
import { newRole } from "../Account/newRole";
import { changeMark } from "../Shops/changeMark";
import { requestNewCAS } from "../Shops/requestNewCAS";
import { finishRequest } from "../Requests/finishRequest";
import { loadNewRequest } from "../Requests/loadNewRequest";
import { loadSalesman } from "../Shops/loadSalesman";
import { removeSalesman } from "../Shops/removeSalesman";

export const subscribeThunk = () => {
  return (dispatch, getState) => {
    const events = getState().contract.events;
    const address = getState().user.address;
    const role = getState().user.role;

    const unsubscribe = [
      events.ChangeRole(
        {
          filter: {
            user: address,
          },
        },
        (error, response) => dispatch(changeRole(response.returnValues.role))
      ),
      events.NewRole(
        {
          filter: {
            user: address,
          },
        },
        (error, response) => dispatch(newRole(response.returnValues.role))
      ),
    ];

    switch (role) {
      case "1": {
        unsubscribe.push(
          events.MarkComplaint((error, { returnValues }) =>
            dispatch(
              changeMark(
                returnValues.shopAddress,
                returnValues.complaintsId,
                returnValues.mark,
                returnValues.changer
              )
            )
          ),
          events.NewComplaint((error, { returnValues }) => {
            dispatch(
              requestNewCAS(returnValues.bookAddress, returnValues.complaintsId)
            );
          }),
          events.AddSalesman((error, { returnValues }) => {
            dispatch(
              loadSalesman(returnValues.salesmanAddress, returnValues.shopId)
            );
          }),
          events.RemoveSalesman((error, { returnValues }) => {
            dispatch(
              removeSalesman(returnValues.salesmanAddress, returnValues.shopId)
            );
          })
        );
        break;
      }
      case "2": {
        unsubscribe.push();
        break;
      }
      case "3": {
        unsubscribe.push(
          events.RequestFinished((error, { returnValues }) => {
            debugger;
            dispatch(finishRequest(returnValues.id, returnValues.requestType));
          }),
          events.NewRequest((error, { returnValues }) => {
            dispatch(loadNewRequest(returnValues));
          })
        );

        break;
      }
      default:
        break;
    }

    dispatch(setUnsubscribe(unsubscribe));
  };
};
