export const getMaxWindowDimension = (): number => {
  return Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
};
