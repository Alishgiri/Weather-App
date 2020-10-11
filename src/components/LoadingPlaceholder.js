import React from "react";
import { Col, Container } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  container: {
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    display: "flex",
    position: "absolute",
  },
});

const LoadingPlaceholder = ({ classes }) => (
  <Container className={classes.container}>
    <Col className="d-flex flex-fill justify-content-center align-items-center">
      <p>Loading…</p>
    </Col>
  </Container>
);

export default withStyles(styles)(LoadingPlaceholder);
