export const toValidAccount = (account) => {
  return {
    login: account.login,
    role: account.role,
    isAdmin: account.isAdmin,
    isSalesman: account.isSalesman,
    fio: account.FIO,
  };
};
