import { addRequest } from "./addRequest";

export const loadNewRequest = ({ requestType, id: requestId }) => {
  return async (dispatch, getState) => {
    const methods = getState().contract.methods;
    let request;
    try {
      switch (requestType) {
        case "beBuyer": {
          request = await methods.requestToShoper(requestId);
          break;
        }

        case "beSalesman": {
          request = await methods.requestToSalesman(requestId);
          break;
        }
        case "beAdmin": {
          request = await methods.requestToAdmin(requestId);
          break;
        }
        default: {
          break;
        }
      }

      dispatch(addRequest(request, requestType));
    } catch (e) {
      console.log(e.message);
    }
  };
};
