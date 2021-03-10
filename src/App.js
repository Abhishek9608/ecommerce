import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Login from "./component/SignIn/Login";
import Signup from "./component/Signup/Signup";
import Cart from "./component/Cart/cart";
import { MuiThemeProvider, createMuiTheme, withStyles, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Navbar from "./component/Navbar/Navbar";
import Modal from "@material-ui/core/Modal";

const theme = createMuiTheme({
  typography: {
    h2: {
      // font: "normal normal 2.5em/1.143em 'P22StGSchriftPro',Helvetica, Arial, 'Lucida Grande', sans-serif",
      fontFamily: "'Open Sans', sans-serif !important",
      marginBottom: "20px",
      paddingBottom: "25px",
      position: "relative",
      textAlign: "center",
      fontSize: "2.75rem",
    },
    body1: {
      // borderBottom: "1px solid #00040a",
      color: "#00040a",
      fontFamily: "'Open Sans', sans-serif !important",
      letterSpacing: "0.2em",
      // marginBottom: "20px",
      // paddingBottom: "10px",
      textAlign: "center",
      // textTransform: "uppercase",
    },
    body2: {
      textAlign: "center",
      color: "#aaaaaa",
    },
    h6: {
      fontFamily: "'Open Sans', sans-serif",
    },
    subtitle1: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h5: {
      fontFamily: "'Open Sans', sans-serif",
    },
  },
});

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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState({
    login: false,
    signup: false,
  });
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    let filterData = cart.filter((cartItem, index) => {
      if (cartItem.id === item.id) {
        let newCart = cart;
        newCart[index] = { ...cartItem, quantity: cartItem.quantity + 1 };
        setCart(newCart);
        return cartItem;
      }
    });
    if (!filterData.length) {
      if (!cart.length) {
        setCart([{ ...item, quantity: 1 }]);
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }
    }
    findTotal();
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleClose = (close) => {
    console.log("called");
    setOpen({
      ...open,
      [close]: false,
    });
  };
  const handleOpen = (getstaus) => {
    setOpen({
      ...open,
      [getstaus]: true,
    });
  };

  const removeFromCart = (item) => {
    let filterCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(filterCart);
    findTotal();
  };
  const findTotal = () => {
    let total = cart.reduce((acc, current) => {
      return acc + current.Price * current.quantity;
    }, 0);
    setTotal(total);
  };
  const decreaseItemQuantity = (item) => {
    cart.forEach((cartItem, index) => {
      if (cartItem.id === item.id) {
        let newCart = cart;
        if (newCart[index].quantity > 1) {
          newCart[index] = { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        setCart(newCart);
        return;
      }
    });
    findTotal();
  };

  const IncreaseItemQuantity = (item) => {
    cart.forEach((cartItem, index) => {
      if (cartItem.id === item.id) {
        let newCart = cart;
        newCart[index] = { ...cartItem, quantity: cartItem.quantity + 1 };
        setCart(newCart);
        return;
      }
    });
    findTotal();
  };
  console.log(open);
  return (
    <Grid xs={12}>
      <Navbar search={search} handleInput={handleInput} handleOpen={handleOpen} cartItem={cart.length} />
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Home addToCart={addToCart} search={search} open={open} handleClose={handleClose} />
          </Route>
          <Route exact path="/login">
            <Login handleClose={handleClose} />
          </Route>
          <Route exact path="/signup">
            <Signup handleClose={handleClose} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} decreaseItemQuantity={decreaseItemQuantity} IncreaseItemQuantity={IncreaseItemQuantity} key={total} total={total} />
          </Route>
        </Switch>
      </MuiThemeProvider>
      <Modal open={open.login} onClose={() => handleClose("login")} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        <div style={modalStyle} className={classes.paper}>
          <Login handleClose={handleClose} />
        </div>
      </Modal>
      <Modal open={open.signup} onClose={() => handleClose("signup")} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        <div style={modalStyle} className={classes.paper}>
          <Signup handleClose={handleClose} />
        </div>
      </Modal>
    </Grid>
  );
}

export default App;
