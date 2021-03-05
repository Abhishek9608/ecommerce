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
import data from "./../data.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
        categories: {
          jeans: false,
          top: false,
        },
        Brand: {
          Nike: false,
          Adidas: false,
        },
      },
      search: "",
      select: "date",
    };
  }
  handleSelect = (event) => {
    this.setState({
      ...this.state,
      select: event.target.value,
    });
  };
  filterIt(arr, searchKey) {
    return arr.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        return obj[key].toLowerCase().includes(searchKey.toLowerCase());
      });
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.checkbox !== this.state.checkbox) {
      // console.log(this.state.checkbox);
      let data = Data();
      let found = false;
      Object.keys(this.state.checkbox).forEach((item) => {
        found = false;
        let result = data.filter((cloth) => {
          // console.log(cloth, this.state.checkbox[item][cloth[item]]);
          if (this.state.checkbox[item][cloth[item]]) {
            found = true;
            return cloth;
          }
        });
        data = found ? result : data;
      });
      this.setState({
        ...this.state,
        data: data,
      });
    }

    if (previousState.search !== this.state.search) {
      console.log("called", this.state.search);
      if (!this.state.search) {
        let result = Data();
        this.setState({
          ...this.state,
          data: result,
        });
      } else {
        // setTimeout(function () {
        console.log(this.state.search);
        let result = this.filterIt(Data(), this.state.search);
        this.setState({
          ...this.state,
          data: result,
        });
        // }, 3000);
      }
    }
  }

  handleChange = (event, type) => {
    // console.log(event.target.type);
    console.log("Hello");
    this.setState({
      ...this.state,
      checkbox: {
        ...this.state.checkbox,
        [type]: {
          ...this.state.checkbox[type],
          [event.target.name]: event.target.checked,
        },
      },
    });
  };

  handleInput = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    let { Brand, categories } = this.state.checkbox;
    return (
      <>
        <Grid xs={12}>
          <Navbar search={this.search} handleInput={this.handleInput} />

          <Grid container xs={11} className={style.container}>
            <Grid xs={2}>
              <Grid xs={12} className={style.filterContainer}>
                <div>FILTERS</div>
                {/* <div style={{ cursor: "pointer" }} onClick={() => this.setState({ ...this.state, data: data() })}>
                  RESET
                </div> */}
              </Grid>
              <Grid xs={12} className={style.categoriesContainer}>
                <div className={style.categoriesHeader}>Categories</div>
                <div className={style.categories}>
                  <div>Jeans</div>
                  <Checkbox name="jeans" checked={categories.jeans} onChange={(event) => this.handleChange(event, "categories")} inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>Top</div>
                  <Checkbox name="top" checked={categories.top} onChange={(event) => this.handleChange(event, "categories")} inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
              </Grid>
              <Grid xs={12} className={style.categoriesContainer}>
                <div className={style.categoriesHeader}>Brand</div>
                <div className={style.categories}>
                  <div>Nike</div>
                  <Checkbox name="Nike" checked={Brand.Nike} onChange={(event) => this.handleChange(event, "Brand")} inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>Addidas</div>
                  <Checkbox name="Adidas" checked={Brand.Adidas} onChange={(event) => this.handleChange(event, "Brand")} inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
              </Grid>
              {/* <Grid xs={12} className={style.categoriesContainer}>
                <div className={style.categoriesHeader}>Country of origin </div>
                <div className={style.categories}>
                  <div>INDIA</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
                <div className={style.categories}>
                  <div>Other</div>
                  <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                </div>
              </Grid> */}
            </Grid>
            <Grid item xs={10}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select defaultValue="date" labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.select} onChange={this.handleSelect}>
                  <MenuItem value="price">Price</MenuItem>
                  <MenuItem value="date">Newest</MenuItem>
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
              <Grid container>
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
                              <div>{item.categories}</div>
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
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(Home);
