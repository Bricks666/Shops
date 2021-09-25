import { SalesmenItem } from "../../../Shared/SalesmenItem/SalesmenItem";

export const SalesmanCardAdmin = (props) => {
  return <SalesmenItem fio={props.fio} address={props.address}></SalesmenItem>;
};
