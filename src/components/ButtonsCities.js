import React from "react";
import { citiesArray } from "../constants/Default";
import { Col, Button } from "reactstrap";
import * as PropTypes from "prop-types";

class ButtonsCities extends React.Component {

  render() {
    return (
      <Col sm="4" md="4">
        <div>
          {citiesArray.map((city, index) => {
            return (
              <Button className="button" color="success" key={index} onClick={() => this.props.weatherZip(citiesArray[index].zip)}>{city.name}</Button>
            );
          })}
        </div>
      </Col>
    );
  }
}

ButtonsCities.propsTypes = {
  citiesArray: PropTypes.array.isRequired,
  weatherZip: PropTypes.func.isRequired
};
export default ButtonsCities;