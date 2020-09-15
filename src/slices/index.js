import { combineReducers } from "redux";
import vijayReducers from "./properties";

const rootReducers = combineReducers({
  properties: vijayReducers,
});

export default rootReducers;
