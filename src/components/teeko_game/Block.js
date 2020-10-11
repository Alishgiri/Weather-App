import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  block: {
    width: 50,
    height: 50,
    zIndex: 10,
    borderWidth: 2,
    marginLeft: 2.5,
    display: "flex",
    marginRight: 2.5,
    borderRadius: 25,
    flexWrap: "wrap",
    borderStyle: "solid",
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  inner_block: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

const Block = ({
  color,
  onClick,
  selectedAreaColor,
  classes: { inner_block, block },
}) => {
  return (
    <div
      className={block}
      onClick={onClick}
      style={{ backgroundColor: selectedAreaColor }}
    >
      <div className={inner_block} style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default withStyles(styles)(Block);
