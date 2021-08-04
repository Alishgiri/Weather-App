import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const GameArea = ({ onPressBack, onPressForward }) => {
  return (
    <Col className="d-flex flex-column">
      <div className="bg-dark m-4 rounded d-flex flex-grow-1"></div>
      <Row className="mx-5 align-items-center justify-content-between">
        <Button className="mr-3" onClick={onPressBack}>
          <ArrowBackIcon />
        </Button>
        <h5>Players: 0</h5>
        <Button className="ml-3" onClick={onPressForward}>
          <ArrowForwardIcon />
        </Button>
      </Row>
    </Col>
  );
};

export default GameArea;
