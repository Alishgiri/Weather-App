import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Col, Container } from "react-bootstrap";

import Home from "./Home";

@inject("weatherStore")
@observer
class Initialize extends Component {
  componentDidMount() {
    const {
      weatherStore: { fetchWeatherData },
    } = this.props;
    fetchWeatherData();
  }

  render() {
    const {
      weatherStore: { visibleWeatherData },
    } = this.props;

    if (visibleWeatherData) return <Home />;

    return (
      <Container className="h-100">
        <Col className="h-100 d-flex justify-content-center align-items-center">
          <p>Loading…</p>
        </Col>
      </Container>
    );
  }
}

export default Initialize;
