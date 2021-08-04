import React from "react";
import { Col, Button } from "react-bootstrap";

const RoomsAndActivities = ({ onChange, onPressJoin }) => {
  return (
    <Col>
      <h5>Join a room</h5>
      <div className="input-group">
        <input
          type="text"
          onChange={onChange}
          className="form-control"
          placeholder="type room name…"
        />
        <Button onClick={onPressJoin}>Join</Button>
      </div>
    </Col>
  );
};

export default RoomsAndActivities;
