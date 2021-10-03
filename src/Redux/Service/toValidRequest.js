export const toValidRequest = (request) => {
  const newRequest = {};

  for (let key in request) {
    if (isNaN(key)) {
      if (key.toLowerCase().includes("address")) {
        newRequest["address"] = request[key];
        continue;
      }
      newRequest[key] = request[key];
    }
  }

  return newRequest;
};
