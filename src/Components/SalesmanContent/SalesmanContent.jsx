import { CASListConnect } from "../Shared/CASList/CASListConnect";
import { CASSalesmanCard } from "./CASCard/CASSalesmanCard";

export const SalesmanContent = (props) => {
  return (
    <section>
      <CASListConnect address={props.address} CASCard={CASSalesmanCard} />
    </section>
  );
};
