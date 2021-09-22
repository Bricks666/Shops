import { applyMiddleware, combineReducers, createStore } from "redux";
import { account } from "./Reducers/account";
import { web3 } from "./Reducers/web3";
import { contract } from "./Reducers/contract";
import { dataForContract } from "./Reducers/dataForContract";
import thunk from "redux-thunk";
import { login } from "./Reducers/login";
import { shops } from "./Reducers/shops";
import { registration } from "./Reducers/registration";
import { newMessage } from "./Reducers/newMessage";

const rootReducer = combineReducers({
  user: account,
  web3: web3,
  contract: contract,
  dataForContract: dataForContract,
  login: login,
  registration: registration,
  shops: shops,
  newMessage: newMessage,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export { store };
