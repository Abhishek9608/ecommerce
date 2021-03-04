import React from "react";
import Home from "./component/Home";
import { Switch, Route } from "react-router-dom";

export default function route() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
}
