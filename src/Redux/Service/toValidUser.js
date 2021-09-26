export const toValidUser = (user) => {
  return {
    id: user.user_address,
    address: user.user_address,
    isAdmin: user.admin,
    isSalesman: user.salesman,
    role: user.role,
  };
};
