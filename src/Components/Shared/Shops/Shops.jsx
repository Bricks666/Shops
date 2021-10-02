import { ShopsFiltersWithForm } from "./ShopsFilters/ShopsFiltersWithForm";
import { ShopsListConnect } from "./ShopsList/ShopsListConnect";

export const Shops = (props) => {
  return (
    <section>
      <h3>Shops</h3>
      <ShopsFiltersWithForm />
      <ShopsListConnect ShopCard={props.ShopCard} />
    </section>
  );
};
