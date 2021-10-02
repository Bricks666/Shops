
import { withCASList } from "../../../Shared/HOC's/withCASList";
import { CASItemConnect } from "../CASItem/CASItemConnect";
import { withCASCreate } from "../../../Shared/HOC's/withCASCreate";
import { compose } from "redux";
import { SalesmenItem } from "../../../Shared/SalesmenItem/SalesmenItem";

export const SalesmanCardBuyer = compose(
  withCASCreate,
  withCASList(CASItemConnect)
)(SalesmenItem);
