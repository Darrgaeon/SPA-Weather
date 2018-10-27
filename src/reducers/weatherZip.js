import {
  WEATHER_ZIP_REQUEST,
  WEATHER_ZIP_SUCCESS,
  WEATHER_ZIP_FAIL
} from "../actions/WeatherZipAction";

const initialState = {
  zip: 21000,
  message: ""
};

export function getWeatherZip(state = initialState, action) {
  switch (action.type) {
  case WEATHER_ZIP_REQUEST:
    return {...state,
      zip: 21000
    };
  case WEATHER_ZIP_SUCCESS:
    return {...state,
      zip: action.payload
    };
  case WEATHER_ZIP_FAIL:
    return {...state,
      message: action.payload,
    };
  default:
    return state;
  }
}
