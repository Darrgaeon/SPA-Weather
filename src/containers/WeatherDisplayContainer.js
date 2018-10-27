import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherLoadingInfo } from "../actions/WeatherDisplayAction";
import WeatherDisplay from "../components/WeatherDisplay";

class ButtonsContainer extends React.Component {
  render() {
    return (
      <WeatherDisplay
        weatherLoadingInfo={this.props.weatherLoadingInfo}
        zip={this.props.weather.zip}
        weatherData={this.props.weatherInfo.data}
        key={this.props.weather.zip}
        status={this.props.weatherInfo.status}
      />
    );
  }
}

const mapStateToProps = store => ({
  weather: store.weatherZip,
  weatherInfo: store.weatherLoadingInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    weatherLoadingInfo
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);