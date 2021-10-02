export const CASItem = (props) => {
  return (
    <article>
      <h5>{props.login}</h5>
      <p>{props.comment}</p>
      <p>Оценка {props.mark}/10</p>
      <span>Likes {props.likes}</span>
      <span>Dislikes {props.dislikes}</span>
      {props.children}
    </article>
  );
};
