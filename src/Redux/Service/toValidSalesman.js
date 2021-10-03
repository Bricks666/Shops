export const toValidSalesman = (salesman) => {
  return {
    fio: salesman.FIO,
    address: salesman.userAddress,
    id: salesman.userAddress,
    complainsAndSuggestions: [],
  };
};
