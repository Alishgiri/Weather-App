import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import ArrowUpIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownIcon from "@material-ui/icons/ArrowDownward";

const GameArea = ({ players, onPressUpward, onPressDownward }) => {
  return (
    <Col className="d-flex flex-column">
      <div className="bg-dark ml-2 my-2 border rounded d-flex flex-grow-1 position-relative">
        {players &&
          players.map((p, index) => (
            <div
              key={`${p.userColor}:${index}`}
              style={{
                bottom: p.move,
                left: (index + 1) * 40,
                backgroundColor: p.userColor,
              }}
              className="p-2 rounded position-absolute"
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
