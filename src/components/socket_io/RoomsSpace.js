import React from "react";
import { Col, Button } from "react-bootstrap";

const RoomsSpace = ({ onChange }) => {
  return (
    <Col>
      <h5>Select or Create a room</h5>
      <div className="input-group">
        <input
          type="text"
          onChange={onChange}
          className="form-control"
          placeholder="Create new room…"
        />
        <Button class="my-2 btn btn-outline-primary">Create</Button>
      </div>
    </Col>
  );
};

export default RoomsSpace;
