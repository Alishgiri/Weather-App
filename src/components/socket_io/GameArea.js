import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import ArrowUpIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownIcon from "@material-ui/icons/ArrowDownward";

import "./styles.css";

const GameArea = ({ players, onPressUpward, onPressDownward }) => {
  return (
    <Col className="d-flex flex-column">
      <div className="bg-dark ml-2 my-2 border rounded d-flex flex-grow-1 position-relative">
        <div id="finish-line" className="py-2">
          <p className="text-center text-light mb-0">FINISH</p>
        </div>
        {players &&
          players.map((p, index) => (
            <div
              key={`${p.userColor}:${index}`}
              style={{
                bottom: p.move,
                left: (index + 1) * 50,
                backgroundColor: p.userColor,
              }}
              className="p-3 rounded position-absolute"
            />
          ))}
      </div>
      <Row className="mx-5 align-items-center justify-content-between">
        <Button className="mr-3" onClick={onPressUpward}>
          <ArrowUpIcon />
        </Button>
        <h5>Players: {players.length}</h5>
        <Button className="ml-3" onClick={onPressDownward}>
          <ArrowDownIcon />
        </Button>
      </Row>
    </Col>
  );
};

export default GameArea;
