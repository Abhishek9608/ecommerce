import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Toolbar, Grid, TextField, Input } from "@material-ui/core";
import style from "./Navbar.module.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
    textDecoration: "none",
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

function Navbar(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={style.toolbar}>
          <div className={style.logo}>mbmb</div>
          <nav>
            <Link variant="body1" to="/home" color="textPrimary" className={classes.link}>
              HOME
            </Link>
            <Link variant="body1" color="textPrimary" className={classes.link}>
              FOR YOU
            </Link>
            <Link variant="body1" to="/courses" color="textPrimary" className={classes.link}>
              ABOUT US
            </Link>
            <Link variant="body1" color="textPrimary" className={classes.link}>
              CONTACT US
            </Link>
          </nav>

          <Grid xs={4} className={style.IconContainer}>
            <Input
              className={style.InputSeach}
              id="input-with-icon-adornment"
              placeholder="Search"
              value={props.search}
              onChange={props.handleInput}
              endAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
            <FavoriteBorderIcon />
            <ShoppingCartIcon />
            <AccountCircleIcon />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
