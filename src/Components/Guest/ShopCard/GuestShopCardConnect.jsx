import { compose } from "redux";
import { withCASList } from "../../Shared/HOC's/withCASList";
import { GuestShopCard } from "./GuestShopCard";
import { CASItemCommentClass } from "../../Shared/CASItem/CASItemCommentClass";

export const GuestShopCardConnect = compose(withCASList(CASItemCommentClass))(
  GuestShopCard
);
