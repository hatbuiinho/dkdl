import { combineReducers } from "redux";
import registerReducer from "../page/components/CeremonyServingRegister/modules/reducer";

const rootReducer = combineReducers({
  registerReducer,
});

export default rootReducer;
