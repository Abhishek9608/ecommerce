import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/SignIn/Login";
import Signup from "./component/Signup/Signup";
import { MuiThemeProvider, createMuiTheme, withStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h2: {
      font: "normal normal 2.5em/1.143em 'P22StGSchriftPro',Helvetica, Arial, 'Lucida Grande', sans-serif",
      marginBottom: "20px",
      paddingBottom: "25px",
      position: "relative",
      textAlign: "center",
      fontSize: "2.75rem",
    },
    body1: {
      // borderBottom: "1px solid #00040a",
      color: "#00040a",
      font: "600 normal 0.857em/1em 'News Cycle', Helvetica, Arial, 'Lucida Grande', sans-serif",
      letterSpacing: "0.2em",
      marginBottom: "20px",
      paddingBottom: "10px",
      textAlign: "center",
      textTransform: "uppercase",
    },
    body2: {
      textAlign: "center",
      color: "#aaaaaa",
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
        </Switch>
      </MuiThemeProvider>
    </>
  );
}

export default App;
