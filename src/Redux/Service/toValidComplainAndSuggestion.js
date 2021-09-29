export const toValidComplainAndSuggestion = (cAS) => {
  return {
    id: cAS.complaintsId,
    login: cAS.login,
    comment: cAS.comment,
    mark: cAS.mark,
    users: [...(cAS.like ?? []), ...(cAS.dislike ?? [])],
    likes: cAS.like?.length ?? 0,
    dislikes: cAS.dislike?.length ?? 0,
    comments: [],
    newComment: "",
  };
};
