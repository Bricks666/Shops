export const Comment = (props) => {
  return (
    <li>
      <h4>{props.login}</h4>
      <p>{props.comment}</p>
      <span>Likes {props.likes}</span> <span>Dislikes {props.dislikes}</span>
      {props.children}
    </li>
  );
};
