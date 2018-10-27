import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherZip } from "../actions/WeatherZipAction";
import ButtonsCities from "../components/ButtonsCities";

class ButtonsCitiesContainer extends React.Component {
  render() {
    return (
      <ButtonsCities
        weatherZip={this.props.weatherZip}
        zip={this.props.weather.zip}
      />
    );
  }
}

const mapStateToProps = store => ({
  weather: store.weatherZip
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    weatherZip
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsCitiesContainer);