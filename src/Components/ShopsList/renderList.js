export const renderList = (items, Component, otherProps = {}) => {
  return items.map((item) => {
    return <Component {...item} {...otherProps} key={item.id} />;
  });
};
