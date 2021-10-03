export const toValidUser = (user) => {
  return +user.role === 4 || +user.role === 5 || +user.role === 6
    ? undefined
    : {
        id: user.userAddress,
        login: user.login,
        fio: user.FIO,
        address: user.userAddress,
        isAdmin: user.isAdmin,
        isSalesman: user.isSalesman,
        role: user.role,
      };
};
