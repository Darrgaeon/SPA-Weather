import {
  WEATHER_DISPLAY_REQUEST,
  WEATHER_DISPLAY_SUCCESS,
  WEATHER_DISPLAY_FAIL
} from "../actions/WeatherDisplayAction";

const initialState = {
  data: [],
  message: "",
  status: ""
};

export function getWeatherLoadingInfo(state = initialState, action) {
  switch (action.type) {
  case WEATHER_DISPLAY_REQUEST:
    return {...state,
      data: []
    };
  case WEATHER_DISPLAY_SUCCESS:
    return {...state,
      data: action.payload,
      status: "ok"
    };
  case WEATHER_DISPLAY_FAIL:
    return {...state,
      message: action.payload,
      status: "fail"
    };
  default:
    return state;
  }
}
