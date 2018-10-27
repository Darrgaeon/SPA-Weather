export const WEATHER_ZIP_REQUEST = "WEATHER_ZIP_REQUEST";
export const WEATHER_ZIP_SUCCESS = "WEATHER_ZIP_SUCCESS";
export const WEATHER_ZIP_FAIL = "WEATHER_ZIP_FAIL";

export const weatherZipRequest = () => ({
  type: WEATHER_ZIP_REQUEST
});

export const weatherZipSuccess = (zip: number) => ({
  type: WEATHER_ZIP_SUCCESS,
  payload: zip
});

export const weatherZipFail = (errorMsg: string) => ({
  type: WEATHER_ZIP_FAIL,
  payload: errorMsg
});

export const weatherZip = (zip: number) => dispatch => {
  dispatch({
    type: weatherZipRequest
  });

  if (zip) {
    dispatch(weatherZipSuccess(zip));
  } else {
    dispatch(weatherZipFail("Ошибка при загрузке страницы..."));
  }
};