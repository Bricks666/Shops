import { CASListConnect } from "../Shared/CASList/CASListConnect";

export const SalesmanContent = (props) => {
  return (
    <section>
      <CASListConnect address={props.address} />
    </section>
  );
};
