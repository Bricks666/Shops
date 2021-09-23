export const toValidShop = (shop) => {
  for (let key in shop) {
    if (isNaN(key)) {
      if (key === "shopId") {
        shop.id = shop[key];
        delete shop[key];
      }
      continue;
    }

    delete shop[key];
  }
  shop.salesmen = [];
  shop.showSalesmen = false;

  return shop;
};
