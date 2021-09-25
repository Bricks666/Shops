import { ShopsConnect } from "../Shared/ShopsList/ShopsConnect";
import { ShopCardConnect } from "./ShopCard/ShopCardConnect";

export const Buyer = (props) => {
  return (
    <section>
      <ShopsConnect shopCard={ShopCardConnect} />
    </section>
  );
};
