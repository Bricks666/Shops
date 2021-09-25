export const ShopCard = (props) => {
  return (
    <article>
      <h3>{props.addressShop}</h3>
      <p>{props.city}</p>
      {props.children}
    </article>
  );
};
