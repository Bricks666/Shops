import { Shops } from "../Shared/Shops/Shops";
import { GuestShopCardConnect } from "./ShopCard/GuestShopCardConnect";

export const Guest = (props) => {
  return (
    <section>
      <Shops ShopCard={GuestShopCardConnect} />
    </section>
  );
};
