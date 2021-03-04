import React from "react";
import Navbar from "../Navbar/Navbar";
import { Typography, Grid, FormControl, InputLabel, Input } from "@material-ui/core";

function Login() {
  return (
    <div>
      <Navbar />
      <Grid xs={12} container justify="center">
        <Grid xs={10} justify="center">
          <Typography variant="h2">SignIn</Typography>
          <Typography variant="body1">PERSONAL DETAILS</Typography>
          <Typography variant="body2">Enter your email address and password to Login in your account.</Typography>
          <FormControl>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="my-input" />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
