import React from "react";
import { API } from "../constants/Default";
import { Col, Alert } from "reactstrap";
import * as PropTypes from "prop-types";

class WeatherDisplay extends React.Component {

  componentDidMount() {
    const url = `${API}${this.props.zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`;
    this.props.weatherLoadingInfo(url);
  }

  render() {
    if (this.props.status !== "ok") return <div>Идет загрузка...</div>;
    const weatherData = this.props.weatherData;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

    return (
      <Col sm="8">
        <Alert>
          <h1>
            {weather.main} in {weatherData.name}
            <img src={iconUrl} alt={weatherData.description} />
          </h1>
          <p>Country: {weatherData.sys.country}</p>
          <p>Current: {weatherData.main.temp}°</p>
          <p>High: {weatherData.main.temp_max}°</p>
          <p>Low: {weatherData.main.temp_min}°</p>
          <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
        </Alert>
      </Col>
    );
  }
}

WeatherDisplay.propsTypes = {
  weatherData: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  weatherLoadingInfo: PropTypes.func.isRequired
};

export default WeatherDisplay;