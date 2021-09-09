import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { loginReducer } from "./loginReducer";

const AllReducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
})

export default AllReducers;