import React from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import HomeOutlined from "@material-ui/icons/HomeOutlined";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menu_item: {
    color: "#697387",
  },
  gradient: {
    backgroundImage: "linear-gradient(to right, #fcfaff, #f2f9fc)",
  },
});

const NavBar = ({ classes }) => {
  const history = useHistory();

  const navigateTo = (route) => () => history.push(route);

  return (
    <div className={classNames(classes.root)}>
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Toolbar className={classes.gradient}>
          <HomeOutlined style={{ color: "#52cbff" }} />
          <MenuItem onClick={navigateTo("/")}>
            <Typography className={classes.menu_item}>
              Weather Forcast
            </Typography>
          </MenuItem>
          <MenuItem onClick={navigateTo("/teeko-game")}>
            <Typography className={classes.menu_item}>Teeko Game</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
