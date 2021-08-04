import React from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import HomeTwoTone from "@material-ui/icons/HomeTwoTone";

const styles = (theme) => ({
  root: { flexGrow: 1 },
  menu_item: { color: "#697387" },
  gradient: { backgroundImage: "linear-gradient(to right, #fcfaff, #f2f9fc)" },
});

const NavBar = ({ classes }) => {
  const history = useHistory();

  const navigateTo = (route) => () => history.push(route);

  return (
    <div className={classNames(classes.root)}>
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Toolbar className={classes.gradient}>
          <MenuItem onClick={navigateTo("/")}>
            <HomeTwoTone color="primary" />
          </MenuItem>
          <MenuItem onClick={navigateTo("/weather-forecast")}>
            <Typography className={classes.menu_item}>
              Weather Forecast
            </Typography>
          </MenuItem>
          <MenuItem onClick={navigateTo("/teeko-game")}>
            <Typography className={classes.menu_item}>Teeko Game</Typography>
          </MenuItem>
          <MenuItem onClick={navigateTo("/image-crop-tool")}>
            <Typography className={classes.menu_item}>
              Image Crop Tool
            </Typography>
          </MenuItem>
          <MenuItem onClick={navigateTo("/socket-io")}>
            <Typography className={classes.menu_item}>Socket.io</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
