import keccak256 from "keccak256";

export const hashing = (dataForHashing) => {
  return keccak256(dataForHashing);
};
