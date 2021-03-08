import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Login from "./component/SignIn/Login";
import Signup from "./component/Signup/Signup";
import Cart from "./component/Cart/cart";
import { MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles";

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
  },
});

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </MuiThemeProvider>
    </>
  );
}

export default App;
