import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Toolbar, Grid, Typography, button } from "@material-ui/core";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from "./cart.module.css";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  details: {
    display: "flex",
  },
  content: {},
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

class cart extends Component {
  constructor() {
    super();
    this.state = {
      data: [1, 2, 3],
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const { classes, theme } = this.props;
    const { data, count } = this.state;
    return (
      <Grid>
        <Navbar />
        {/* <Grid xs={10}>
          <Typography>My Bag</Typography>
        </Grid> */}
        <Grid xs={10} className={styles.mainContent}>
          <Grid xs={7}>
            {data.map((item) => {
              return (
                <Card className={styles.CardContent}>
                  <CardContent className={styles.mainBody}>
                    <img className={styles.cover} src="https://rukminim1.flixcart.com/image/496/595/klb78nk0/jean/f/2/b/28-jean-pln-agray-nifty-original-imagygz4p4nfyqxd.jpeg?q=50" alt="" srcset="" />
                    <Grid>
                      <Typography className={styles.headerTypo} variant="h5">
                        Live From Space
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        $89.00
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Size: S
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardContent className={styles.IconContainer}>
                    <Grid>
                      <Grid className={styles.incrementContainer}>
                        <RemoveIcon onClick={(e) => this.decrement(e)} />
                        <Typography variant="h6">{count}</Typography>
                        <AddIcon onClick={(e) => this.increment(e)} />
                      </Grid>
                    </Grid>
                    <CancelOutlinedIcon />
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
          <Grid xs={3}>
            <Grid className={styles.OrderHeader}>ORDER SUMMARY</Grid>
            <Grid className={styles.billContainer}>
              <Grid className={styles.subTotalContainer}>
                <Typography variant="h6">Subtotal</Typography>
                <Typography variant="h6">$253.00</Typography>
              </Grid>
              <Grid className={styles.GrandContainer}>
                <Typography variant="h6">Grand Total:</Typography>
                <Typography variant="h6">$253.00</Typography>
              </Grid>
            </Grid>
            <Button className={styles.checkout}>CHECKOUT</Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(useStyles)(cart);
