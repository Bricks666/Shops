import { addRequest } from "../../Actions/Requests/addRequest";
import { api } from "../../API/API";

export const loadNewRequest = (requestType, requestId) => {
  return async (dispatch, getState) => {
    const methods = getState().contract.methods;
    let request;
    debugger;
    try {
      switch (requestType) {
        case "beBuyer": {
          request = await methods.requestToShoper(requestId).call();
          break;
        }

        case "beSalesman": {
          request = await methods.requestToSalesman(requestId).call();
          break;
        }
        case "beAdmin": {
          request = await methods.requestToAdmin(requestId).call();
          break;
        }
        case "toBank": {
          request = await api.getBankRequest(requestId);
          break;
        }
        default: {
          break;
        }
      }
      debugger;
      dispatch(addRequest(request, requestType));
    } catch (e) {
      console.log(e.message);
    }
  };
};
