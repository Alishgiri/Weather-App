import React from "react";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { inject, observer } from "mobx-react";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Col, Container, Row } from "react-bootstrap";

@inject("weatherStore")
@observer
class Home extends React.Component {
  state = { isCelcius: false };

  setIsCelcius = (isCelcius) => this.setState({ isCelcius });

  render() {
    const {
      weatherStore: { weatherData },
    } = this.props;
    const { isCelcius } = this.state;
    console.log("weatherData", weatherData);
    return (
      <Container>
        <h1 className="mt-3">Weather App</h1>
        <Paper className="p-3 mt-4" elevation={3}>
          <Row>
            <Col className="d-flex justify-content-center">
              <FormControlLabel
                value="celcius"
                label="Celcius"
                checked={isCelcius}
                control={<Radio />}
                onChange={(v) => this.setIsCelcius(true)}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <FormControlLabel
                value="fahrenheit"
                label="Fahrenheit"
                checked={!isCelcius}
                control={<Radio />}
                onChange={(v) => this.setIsCelcius(false)}
              />
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Paper>
      </Container>
    );
  }
}

export default Home;
