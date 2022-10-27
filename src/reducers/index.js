import { combineReducers } from "redux";
import registerReducer from "../page/components/CeremonyServingRegister/modules/reducer";
import registerStep1Reducer from "../page/components/Step1/modules/reducer";
import registerStep2Reducer from "../page/components/Step2/modules/reducer";

const rootReducer = combineReducers({
  registerReducer,
  registerStep1Reducer,
  registerStep2Reducer,
});

export default rootReducer;
