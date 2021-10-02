export const toValidUser = (user) => {
  return +user.role === 4 || +user.role === 5 || +user.role === 6
    ? undefined
    : {
        id: user.user_address,
        login: user.login,
        fio: user.FIO,
        address: user.user_address,
        isAdmin: user.admin,
        isSalesman: user.salesman,
        role: user.role,
      };
};
