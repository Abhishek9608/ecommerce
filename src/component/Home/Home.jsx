import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, ListItem } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import style from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Data from "./../data.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Footer from "../Footer/Footer";
import Modal from "@material-ui/core/Modal";
import Login from "../SignIn/Login";
import SignUp from "../Signup/Signup";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = (theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  parent: {},
  root: {
    flexGrow: 1,
    maxWidth: 345,
    "& .MuiButton-outlinedPrimary:hover": {
      border: "none",
      backgroundColor: "#009966",
    },
    "& .MuiMenuItem-root": {
      marginBottom: "5px",
    },
  },
  media: {
    height: "140px",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  formControl: {
    marginTop: "10px",
  },
  MenuItem: {
    marginBottom: "5px",
  },
});

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
      open: {
        login: false,
        signup: false,
      },
      modalStyle: getModalStyle(),
    };
  }

  reset() {
    this.setState({
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
      open: {
        login: false,
        signup: false,
      },
    });
  }
  handleSelect = (event) => {
    let dataHolder = this.state.data;
    dataHolder.sort((a, b) => {
      if (event.target.value === "date") {
        console.log("called", event.target.value, new Date(a.date), a.date);
        return new Date(a.date) - new Date(b.date);
      } else if (event.target.value === "asc") {
        return parseFloat(a.Price) - parseFloat(b.Price);
      } else {
        return parseFloat(b.Price) - parseFloat(a.Price);
      }
    });
    this.setState({
      ...this.state,
      data: dataHolder,
      select: event.target.value,
    });
  };
  filterIt(arr, searchKey) {
    return arr.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        console.log(obj[key]);
        return `${obj[key]}`.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase());
      });
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.checkbox !== this.state.checkbox && !this.state.search) {
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
      if (!this.state.search) {
        let result = Data();
        this.setState({
          ...this.state,
          data: result,
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
        });
      } else {
        // setTimeout(function () {
        let getData = Data();
        let result = this.filterIt(getData, this.state.search);
        this.setState({
          ...this.state,
          data: result,
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
        });
        // }, 3000);
      }
    }
  }

  handleChange = (event, type) => {
    // console.log(event.target.type);
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

  handleClose = (close) => {
    this.setState({
      ...this.state,
      open: {
        ...this.state.open,
        [close]: false,
      },
    });
  };
  handleOpen = (open) => {
    this.setState({
      ...this.state,
      open: {
        ...this.state.open,
        [open]: true,
      },
    });
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    let { Brand, categories } = this.state.checkbox;
    return (
      <>
        <Grid xs={12}>
          <Navbar search={this.search} handleInput={this.handleInput} handleOpen={this.handleOpen} />

          <Grid container xs={11} className={style.container}>
            <Grid xs={2}>
              <Grid xs={12} className={style.filterContainer}>
                <div>FILTERS</div>
                <div style={{ cursor: "pointer" }} onClick={() => this.reset()}>
                  RESET
                </div>
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
              <Grid container justify="flex-end">
                <FormControl className={classes.formControl} style={{ marginTop: "20px" }}>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select defaultValue="date" labelId="demo-simple-select-label" id="demo-simple-select-outlined" value={this.state.select} onChange={this.handleSelect}>
                    <ListItem value="asc" className={classes.MenuItem}>
                      Low to Heigh
                    </ListItem>
                    <ListItem value="dsc" className={classes.MenuItem}>
                      Hight to Low
                    </ListItem>
                    <ListItem value="date" className={classes.MenuItem}>
                      Newest
                    </ListItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
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
          <Footer />
          <Modal open={this.state.open.login} onClose={() => this.handleClose("login")} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            <div style={this.state.modalStyle} className={classes.paper}>
              <Login />
            </div>
          </Modal>
          <Modal open={this.state.open.signup} onClose={() => this.handleClose("signup")} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            <div style={this.state.modalStyle} className={classes.paper}>
              <SignUp />
            </div>
          </Modal>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(Home);
