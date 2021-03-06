import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import { account } from "./Reducers/account";
import { web3 } from "./Reducers/web3";
import { contract } from "./Reducers/contract";
import { dataForContract } from "./Reducers/dataForContract";
import { login } from "./Reducers/login";
import { shops } from "./Reducers/shops";
import { registration } from "./Reducers/registration";
import { CAS } from "./Reducers/CAS";
import { requests } from "./Reducers/requests";
import { users } from "./Reducers/users";
import { freeAddresses } from "./Reducers/freeAddresses";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: login,
  user: account,
  web3: web3,
  contract: contract,
  dataForContract: dataForContract,
  registration: registration,
  shops: shops,
  CAS: CAS,
  requests: requests,
  users: users,
  form: formReducer,
  freeAddresses: freeAddresses,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export { store };
