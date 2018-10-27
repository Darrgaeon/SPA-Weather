import React from "react";
import ButtonsContainer from "../containers/ButtonsCitiesContainer";
import WeatherDisplayContainer from "../containers/WeatherDisplayContainer";
import { Container, Row } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <Container className="header">
        <Row>
          <ButtonsContainer/>
          <WeatherDisplayContainer/>
        </Row>
      </Container>
    );
  }
}

export default App;