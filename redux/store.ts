import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "../redux/reducers/rootReducer";

const store = legacy_createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
