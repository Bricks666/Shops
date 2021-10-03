import { utils as web3Utils } from "web3";
import { hashing } from "../Service/hashing";

let methods;
let sender;

export const api = {
  initialApi(contract, senderAddress) {
    methods = contract.methods;
    if (web3Utils.isAddress(senderAddress) === false) {
      throw new Error("It's not correct address");
    }

    sender = senderAddress;
  },
  async refreshSender(newAddress) {
    if (web3Utils.isAddress(newAddress) === false) {
      throw new RangeError("It's not correct address");
    }

    sender = newAddress;
  },
  async getUserInfo(userAddress) {
    return await methods.user(userAddress).call();
  },
  async addShop(shopAddress, city, login, password) {
    return await methods
      .AddShop(shopAddress, city, login, hashing(password))
      .send({ from: sender });
  },
  async getFreeAddresses() {
    return await methods.getFreeAddresses().call();
  },
  async getShop(shopId) {
    return await methods.shop(shopId).call();
  },
  async getShops() {
    return await methods.getShops().call();
  },
  async getShopSalesmen(shopId) {
    const salesmenAddresses = await methods.ShowSalesmanOfStore(shopId).call();

    const salesmen = [];
    for (let address of salesmenAddresses) {
      salesmen.push(methods.user(address).call());
    }

    return (await Promise.all(salesmen)).filter(
      (salesman) => web3Utils.hexToNumberString(salesman.userAddress) !== "0"
    );
  },
  async sendNewComment(address, CASId, comment) {
    return await methods
      .AddComment(address, CASId, comment)
      .send({ from: sender });
  },
  async sendBankRequest(shopId) {
    debugger;
    return await methods.ToBankRequest(shopId).send({ from: sender });
  },
  async getBankRequest(shopId) {
    return await methods.BankRequestShop(shopId).call();
  },
};

window.api = api;
