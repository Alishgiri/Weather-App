import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    padding: 5,
    minWidth: 120,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InfoCard({ convertedDate, isCelcius, temp, humidity }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {convertedDate}
        </Typography>
        <Typography variant="h6" component="h6">
          {temp}
          {isCelcius ? "˚C" : "˚F"}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Humidity - {humidity}
        </Typography>
      </CardContent>
      <CardActions onClick={() => alert("Go to weather app for more info")}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
