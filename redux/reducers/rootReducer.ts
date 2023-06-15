import { combineReducers } from "redux";
import authReducer from "./authReducer";
import studentsReducer from "./studentsReducer";

const RootReducer = combineReducers({
  auth: authReducer,
  students: studentsReducer,
});

export default RootReducer;
