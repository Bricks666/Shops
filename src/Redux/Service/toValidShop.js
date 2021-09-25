export const toValidShop = (shop) => {

  const validShop = {};
  for (let key in shop) {
    if (isNaN(key)) {
      if (key === "shopId") {
        validShop.id = +shop[key];
      }
      validShop[key] = shop[key];
    }
  }

  validShop.salesmen = [];
  validShop.showSalesmen = false;

  return validShop;
};
