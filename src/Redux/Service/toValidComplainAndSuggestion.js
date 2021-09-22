export const toValidComplainAndSuggestion = (cAS) => {
  return {
    comment: cAS.comment,
    id: cAS.complaintsId,
    mark: cAS.mark,
    users: [...(cAS.like ?? []), ...(cAS.dislike ?? [])],
  };
};
