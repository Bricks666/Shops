import { useState } from "react";
import { Button } from "../../Shared/Button/Button";
import { Shops } from "../../Shared/Shops/Shops";
import { ShopCardAdmin } from "../ShopCardAdmin/ShopCardAdmin";
import { AddShopFormConnect } from "./AddShopForm/AddShopFormConnect";
import { ModalWindow } from "../../Shared/ModalWindow/ModalWindow";

export const AdminShops = (props) => {
  const [showAddShop, toggleShowAddShop] = useState(false);

  return (
    <div>
      <Button onClick={() => toggleShowAddShop(!showAddShop)}>
        Добавить магазин
      </Button>
      <ModalWindow
        condition={showAddShop}
        close={() => toggleShowAddShop(!showAddShop)}
      >
        <AddShopFormConnect />
      </ModalWindow>
      <Shops ShopCard={ShopCardAdmin} />
    </div>
  );
};
