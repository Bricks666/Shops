import Web3 from "web3";

export const toValidFreeAddress = (address, index) => {
  return Web3.utils.hexToNumberString(address) !== "0"
    ? {
        address,
        index,
      }
    : undefined;
};
