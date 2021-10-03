import { Selector } from "../../../../Shared/Selector/Selector";

export const FreeAddressesList = (props) => {
  return (
    <Selector
      {...props}
      initial={props.addresses && props.addresses[0]?.index}
      names={props.addresses?.map((address) => address.address)}
      values={props.addresses?.map((address) => address.index)}
    />
  );
};
