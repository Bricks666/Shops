import { compose } from "redux";
import { withCASList } from "../../../Shared/HOC's/withCASList";
import { SalesmenItem } from "../../../Shared/SalesmenItem/SalesmenItem";
import { CASItemCommentClass } from "../../../Shared/CASItem/CASItemCommentClass";

export const ShopSalesmanCard = compose(withCASList(CASItemCommentClass))(
  SalesmenItem
);
