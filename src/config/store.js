import { createStore, applyMiddleware } from "redux";
import loginReducer from "./reducers/loginreducer";
import signupreducer from "./reducers/signupreducer";
import uiddata from "./reducers/uiddata";
import useriddata from "./reducers/useriddata";
import hoteldata from "./reducers/hoteldata";
import useruid from "./reducers/useruid";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
  loginReducer,
  signupreducer,
  uiddata,
  useriddata,
  hoteldata,
  useruid
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
