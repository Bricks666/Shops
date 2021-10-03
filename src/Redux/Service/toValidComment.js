export const toValidComment = (comment) => {
  return {
    id: comment.commentId,
    login: comment.login,
    content: comment.comment,
    users: [...(comment.likes ?? []), ...(comment.dislikes ?? [])],
    likes: comment.likes?.length ?? 0,
    dislikes: comment.dislikes?.length ?? [],
  };
};
