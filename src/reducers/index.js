import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import cards from "./cards";


const rootReducer = combineReducers({
  cards,
  routing: routerReducer,
});

export default rootReducer;
