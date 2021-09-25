export const toValidUser = (user) => {
  return {
    address: user.user_address,
    isAdmin: user.admin,
    isSalesman: user.salesman,
    role: user.role,
  };
};
