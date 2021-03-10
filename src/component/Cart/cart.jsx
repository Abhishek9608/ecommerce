import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Toolbar, Grid, Typography, button, IconButton } from "@material-ui/core";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from "./cart.module.css";
import { Link } from "react-router-dom";

const useStyles = (theme) => ({
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
});

class cart extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
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
    const { classes, theme, cart } = this.props;
    const { data, count } = this.state;
    return (
      <div className={styles.mainContent}>
        {!cart.length ? (
          <Typography>Cart is empty</Typography>
        ) : (
          <>
            <Grid xs={10} lg={7}>
              {cart.map((item) => {
                return (
                  <Card className={styles.CardContent}>
                    <CardContent className={styles.mainBody}>
                      <img className={styles.cover} src={item.image} alt="" srcset="" />
                      <Grid>
                        <Typography className={styles.headerTypo} variant="h5">
                          {item.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {item.Brand}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          ${item.Price}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Size: S
                        </Typography>
                      </Grid>
                    </CardContent>
                    <CardContent className={styles.IconContainer}>
                      <Grid>
                        <Grid className={styles.incrementContainer}>
                          <RemoveIcon style={{ cursor: "pointer" }} onClick={() => this.props.decreaseItemQuantity(item)} />
                          <Typography variant="h6">{item.quantity}</Typography>
                          <AddIcon style={{ cursor: "pointer" }} onClick={() => this.props.IncreaseItemQuantity(item)} />
                        </Grid>
                      </Grid>
                      <CancelOutlinedIcon style={{ cursor: "pointer" }} onClick={() => this.props.removeFromCart(item)} />
                    </CardContent>
                  </Card>
                );
              })}
            </Grid>
            <Grid xs={10} lg={3}>
              <Grid className={styles.OrderHeader}>ORDER SUMMARY</Grid>
              <Grid className={styles.billContainer}>
                <Grid className={styles.subTotalContainer}>
                  <Typography variant="h6">Subtotal</Typography>
                  <Typography variant="h6">${this.props.total}</Typography>
                </Grid>
                <Grid className={styles.GrandContainer}>
                  <Typography variant="h6">Grand Total:</Typography>
                  <Typography variant="h6">${this.props.total}</Typography>
                </Grid>
              </Grid>
              <Button className={styles.checkout}>CHECKOUT</Button>
            </Grid>
          </>
        )}
      </div>
    );
  }
}
export default withStyles(useStyles)(cart);
