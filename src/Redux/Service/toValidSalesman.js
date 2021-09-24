export const toValidSalesman = (salesman, shopId) => {
  return {
    fio: salesman.FIO,
    address: salesman.user_address,
    id: salesman.user_address,
    complainsAndSuggestions: [],
  };
};
