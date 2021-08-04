import React from "react";
import { Col, Button } from "react-bootstrap";

const RoomsAndActivities = ({
  activities,
  onPressJoin,
  onPressDone,
  onChangeRoomName,
  onChangeYourColor,
}) => {
  return (
    <Col>
      <h5>Join a room</h5>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={onChangeYourColor}
          placeholder="Type Your Color"
        />
        <Button onClick={onPressDone}>Done!</Button>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={onChangeRoomName}
          placeholder="type room name…"
        />
        <Button onClick={onPressJoin}>Join</Button>
      </div>
      {activities &&
        activities.length > 0 &&
        activities.map((activity, index) => (
          <h6
            key={index}
            className="mt-3 p-2 shadow rounded bg-primary text-light"
          >
            {activity}
          </h6>
        ))}
    </Col>
  );
};

export default RoomsAndActivities;
