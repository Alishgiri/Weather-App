import React from "react";
import { inject, observer } from "mobx-react";

import { Col, Container } from "react-bootstrap";

@inject("weatherStore")
@observer
class Home extends React.Component {
  render() {
    const {
      weatherStore: { weatherData },
    } = this.props;
    console.log("weatherData", weatherData);
    return (
      <Container>
        <Col>
          <h1>Weather App</h1>
        </Col>
      </Container>
    );
  }
}

export default Home;
