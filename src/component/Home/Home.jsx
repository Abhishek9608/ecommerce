import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Toolbar, Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import style from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Data from "./../data.js";

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
  constructor() {
    super();
    this.state = {
      data: Data(),
      checkbox: {
        jeans: false,
        top: false,
      },
    };
  }

  componentDidUpdate(prevState) {
    console.log(prevState, this.state);
  }

  handleChange = (event) => {
    console.log(event.target.name);
    // this.setState({});
    let data = Data();
    let found = false;
    Object.keys(this.state.checkbox).forEach((e) => {
      if (this.state.checkbox[e]) {
        found = true;
        return;
      }
    });
    let filterValue;
    if (found) {
      filterValue = data.filter((e) => e.type === event.target.name && event.target.value);
    } else {
      filterValue = data;
    }
    console.log(filterValue);

    this.setState({
      ...this.state,
      data: filterValue,
      checkbox: {
        ...this.state.checkbox,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <>
        <Grid xs={12}>
          <Navbar />

          <Grid container xs={11} className={style.container}>
            <Grid xs={2}>
              <Grid xs={12} className={style.filterContainer}>
                <div>FILTERS</div>
                <div>RESET</div>
              </Grid>
              <Grid xs={12} className={style.categoriesContainer}>
                <div className={style.categoriesHeader}>Categories</div>
                <div className={style.categories}>
                  <div>Jeans</div>
                  <Checkbox name="jeans" value={this.state.checkbox.jeans} onChange={this.handleChange} inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>Top</div>
                  <Checkbox value={this.state.checkbox.top} inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
              </Grid>
              <Grid xs={12} className={style.categoriesContainer}>
                <div className={style.categoriesHeader}>Brand</div>
                <div className={style.categories}>
                  <div>Nike</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>Addidas</div>
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
            <Grid container xs={10}>
              {this.state.data &&
                this.state.data?.map((item) => {
                  return (
                    <Grid xs={3}>
                      <Card className={classes.root} style={{ margin: "8px" }}>
                        <CardActionArea>
                          {/* <CardMedia className={classes.    
} image={} title="Contemplative Reptile" /> */}
                          <img className={style.cardmedia} src={item.image} alt="" srcset="" />
                          <CardContent className={style.cardContent}>
                            <Typography gutterBottom variant="h7" component="h7">
                              {item.code}
                            </Typography>
                            <div>{item.type}</div>
                            <div>Price:{item.Price}</div>
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
