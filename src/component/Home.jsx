import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Toolbar, Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import style from "./Home.module.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  root: {
    flexGrow: 1,
    maxWidth: 345,
    "& .MuiButton-outlinedPrimary:hover": {
      border: "none",
      backgroundColor: "#009966",
    },
  },
  media: {
    height: "140px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "transparent",
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 0,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    width: "78px",
    height: "26px",
    margin: theme.spacing(1, 1.5),
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#000000",
    cursor: "pointer",
  },
  footer: {
    "& .MuiTypography-colorTextPrimary": {
      color: "#fff",
    },
    "& .MuiTypography-colorTextSecondary": {
      color: "#fff",
    },
  },
}));

class Home extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid xs={12}>
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={style.toolbar}>
              <div className={style.logo}>mbmb</div>
              <nav>
                <Link variant="body1" to="/home" color="textPrimary" className={classes.link}>
                  Home
                </Link>
                <Link variant="body1" color="textPrimary" className={classes.link}>
                  About
                </Link>
                <Link variant="body1" to="/courses" color="textPrimary" className={classes.link}>
                  Courses
                </Link>
                <Link variant="body1" color="textPrimary" className={classes.link}>
                  Contact
                </Link>
                <Link variant="body1" color="textPrimary" className={classes.link}>
                  Shop
                </Link>
                <Link variant="body1" color="textPrimary" className={classes.link}>
                  Blog
                </Link>
                <Link variant="body1" color="textPrimary" className={classes.link}>
                  Quiz
                </Link>
              </nav>
            </Toolbar>
          </AppBar>

          <Grid container xs={11} className={style.container}>
            <Grid xs={3}>
              <Grid xs={12} className={style.filterContainer}>
                <div>FILTERS</div>
                <div>RESET</div>
              </Grid>
              <Grid xs={12} className={style.categoriesContainer}>
                <div className={style.categoriesHeader}>Categories</div>
                <div className={style.categories}>
                  <div>upper</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>upper</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
              </Grid>
              <Grid xs={12} className={style.categoriesContainer}>
                <div className={style.categoriesHeader}>Price</div>
                <div className={style.categories}>
                  <div>Low</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>mid</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>High</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>Premium</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
              </Grid>
              <Grid xs={12} className={style.categoriesContainer}>
                <div className={style.categoriesHeader}>Country of origin </div>
                <div className={style.categories}>
                  <div>INDIA</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>Other</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
              </Grid>
            </Grid>
            <Grid container xs={9}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                return (
                  <Grid xs={3}>
                    <Card className={classes.root} style={{ margin: "8px" }}>
                      <CardActionArea>
                        {/* <CardMedia className={classes.media} image={} title="Contemplative Reptile" /> */}
                        <img className={style.cardmedia} src="https://rukminim1.flixcart.com/image/496/595/klb78nk0/jean/f/2/b/28-jean-pln-agray-nifty-original-imagygz4p4nfyqxd.jpeg?q=50" alt="" srcset="" />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(Home);
