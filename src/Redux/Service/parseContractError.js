const toValidJSON = (message) => {
  if (message.includes("JSON")) {
    return message.replace("Internal JSON-RPC error.\n", "");
  }

  return message
    .replace("Error: [ethjs-query] while formatting outputs from RPC ", "")
    .replaceAll("'", "");
};

const getErrorMessage = (errorObject) => {
  if (errorObject.data !== undefined) {
    return errorObject.data;
  }

  return errorObject.value.data.data;
};

export const parseContractError = (error) => {
  const validError = toValidJSON(error.message);
  const jsErrorObject = JSON.parse(validError);
  const targetErrorObject = getErrorMessage(jsErrorObject);
  for (let key in targetErrorObject) {
    if (isNaN(key) === false) {
      return targetErrorObject[key].reason;
    }
  }
};
