import axios from "axios";
import { defaultErrorMsg } from "../constants/Default";

export const WEATHER_DISPLAY_REQUEST = "WEATHER_DISPLAY_REQUEST";
export const WEATHER_DISPLAY_SUCCESS = "WEATHER_DISPLAY_SUCCESS";
export const WEATHER_DISPLAY_FAIL = "WEATHER_DISPLAY_FAIL";

export const weatherDisplayRequest = () => ({
  type: WEATHER_DISPLAY_REQUEST
});

export const weatherDisplaySuccess = (data: array) => ({
  type: WEATHER_DISPLAY_SUCCESS,
  payload: data
});

export const weatherDisplayFail = (errorMsg: string) => ({
  type: WEATHER_DISPLAY_FAIL,
  payload: errorMsg
});

export const weatherLoadingInfo = (url: string) => dispatch => {
  dispatch({
    type: weatherDisplayRequest
  });

  axios.get(url)
    .then(res => {const weatherData = res.data;

      if (weatherData !== undefined) {
        dispatch(weatherDisplaySuccess(weatherData));
      } else {
        dispatch(weatherDisplayFail("Ошибка при загрузке страницы..."));
      }
    })
    .catch(e => dispatch(weatherDisplayFail(defaultErrorMsg)));
};