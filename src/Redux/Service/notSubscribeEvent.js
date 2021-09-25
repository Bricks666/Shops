export const notSubscribeEvent = (subscribeNames, newNames) => {
  return subscribeNames.includes(newNames) === false;
};
