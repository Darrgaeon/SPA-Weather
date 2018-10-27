import { combineReducers } from "redux";
import { getWeatherLoadingInfo } from "./weatherDisplay";
import { getWeatherZip } from "./weatherZip";

export const rootReducer  = combineReducers({
  weatherZip: getWeatherZip,
  weatherLoadingInfo: getWeatherLoadingInfo,
});