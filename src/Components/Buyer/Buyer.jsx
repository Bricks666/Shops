import { Shops } from "../Shared/Shops/Shops";
import { ShopCardConnect } from "./ShopCard/ShopCardConnect";

export const Buyer = (props) => {
  return (
    <section>
      <Shops ShopCard={ShopCardConnect} />
    </section>
  );
};
