import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Toolbar, Grid, TextField, Input, ListItem } from "@material-ui/core";
import style from "./Navbar.module.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

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
    "& .MuiInputBase-root": {
      marginBottom: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px 9px 7px",
    },
    "& .MuiOutlinedInput-adornedEnd": {
      backgroundColor: "#f5f5f6",
    },
    "& .MuiButton-root": {
      padding: 0,
      minWidth: 0,
    },
    "& .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)": {
      marginTop: 0,
    },
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
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
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

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
function Navbar(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={style.toolbar}>
          <span className={style.logo}>
            <Link to="/">Logo</Link>
          </span>
          <Grid container alignItems="center" justify="flex-end">
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
              {/* <Input
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
              /> */}

              <FormControl className={style.InputSeach} variant="filled">
                {/* <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel> */}
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Search"
                  value={props.search}
                  onChange={props.handleInput}
                  endAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FavoriteBorderIcon />
              <ShoppingCartIcon />

              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button {...bindTrigger(popupState)}>
                      <AccountCircleIcon />
                    </Button>
                    {/* <Menu > */}
                    <StyledMenu id="customized-menu" keepMounted {...bindMenu(popupState)}>
                      <ListItem onClick={() => props.handleOpen("login")}>Login</ListItem>
                      <ListItem onClick={() => props.handleOpen("signup")}>Signup</ListItem>
                    </StyledMenu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
