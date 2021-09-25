export const toValidComplainAndSuggestion = (cAS) => {
  return {
    login: cAS.login,
    comment: cAS.comment,
    id: cAS.complaintsId,
    mark: cAS.mark,
    users: [...(cAS.like ?? []), ...(cAS.dislike ?? [])],
  };
};
