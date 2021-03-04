import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/SignIn/Login";
import Signup from "./component/Signup/Signup";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
