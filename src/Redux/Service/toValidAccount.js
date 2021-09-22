export const toValidAccount = (account) => {
  return {
    login: account.login,
    role: account.role,
    isAdmin: account.admin,
    isSalesman: account.salesman,
    fio: account.FIO,
  };
};
