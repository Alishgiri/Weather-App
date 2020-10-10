import React from "react";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { inject, observer } from "mobx-react";
import { Col, Container, Row } from "react-bootstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import InfoCard from "../components/InfoCard";
import LoadingCard from "../components/LoadingCard";

@inject("weatherStore")
@observer
class Home extends React.Component {
  _setIsCelcius = async (isCelcius) => {
    const {
      weatherStore: { fetchWeatherData, setIsCelcius, setIsRefreshing },
    } = this.props;
    setIsCelcius(isCelcius);
    setIsRefreshing();
    await fetchWeatherData(isCelcius);
    setIsRefreshing(false);
  };

  setIsRefreshing = (value = true) => this.setState({ isRefreshing: value });

  render() {
    const {
      weatherStore: { weatherData, isCelcius, isRefreshing },
    } = this.props;
    return (
      <Container>
        <h1 className="mt-3">Weather App</h1>
        <Paper className="p-5 mt-4">
          <Row>
            <Col className="d-flex justify-content-center">
              <FormControlLabel
                value="celcius"
                label="Celcius"
                checked={isCelcius}
                control={<Radio />}
                onChange={(v) => this._setIsCelcius(true)}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <FormControlLabel
                value="fahrenheit"
                label="Fahrenheit"
                control={<Radio />}
                checked={!isCelcius}
                onChange={(v) => this._setIsCelcius(false)}
              />
            </Col>
          </Row>
          {isRefreshing ? (
            <Row>
              <Col>
                <LoadingCard isCelcius={isCelcius} />
              </Col>
              <Col>
                <LoadingCard isCelcius={isCelcius} />
              </Col>
              <Col>
                <LoadingCard isCelcius={isCelcius} />
              </Col>
            </Row>
          ) : (
            <Row>
              {weatherData.map((item, i) => {
                const dt = item.dt;
                const jsDate = new Date(dt * 1000);
                return (
                  <Col key={dt}>
                    <InfoCard
                      temp={item.main.temp}
                      isCelcius={isCelcius}
                      humidity={item.main.humidity}
                      convertedDate={jsDate.toDateString()}
                    ></InfoCard>
                  </Col>
                );
              })}
            </Row>
          )}
        </Paper>
      </Container>
    );
  }
}

export default Home;
