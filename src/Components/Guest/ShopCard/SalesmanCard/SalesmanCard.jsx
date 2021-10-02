import { CASItemCommentClass } from "../../../Shared/CASItem/CASItemCommentClass";
import { withCASList } from "../../../Shared/HOC's/withCASList";
import { SalesmenItem } from "../../../Shared/SalesmenItem/SalesmenItem";

export const SalesmanCardGuest = withCASList(CASItemCommentClass)(SalesmenItem);
