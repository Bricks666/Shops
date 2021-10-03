
export const toValidShopAccount = (shop) => {

  return {
    id: shop.shopId,
    city: shop.city,
    haveBankMoney: shop.haveBankMoney,
  };
};
