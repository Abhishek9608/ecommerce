import React from "react";
import Navbar from "../Navbar/Navbar";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid, FormControl, InputLabel, Input } from "@material-ui/core";
import style from "./Login.module.css";

function Login() {
  return (
    <div>
      <Navbar />
      <Grid xs={12} container justify="center">
        <Grid xs={10} justify="center">
          <Typography variant="h2">SignIn</Typography>
          <Typography variant="body1" style={{ borderBottom: "1px solid #00040a" }}>
            PERSONAL DETAILS
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "30px" }}>
            Enter your email address and password to Login in your account.
          </Typography>
          <Grid container direction="column" justify="center">
            {/* <InputLabel htmlFor="username">Username</InputLabel> */}
            <label htmlFor="username" className={style.label}>
              Username
            </label>
            <input id="username" type="usernmae" className={style.input} placeholder="Username" />
          </Grid>
          <Grid container direction="column" justify="center">
            {/* <InputLabel htmlFor="username">Username</InputLabel> */}
            <label htmlFor="Password" className={style.label}>
              Password
            </label>
            <input id="Password" type="password" className={style.input} placeholder="Password" />
          </Grid>
          <input type="button" value="SignIn" className={style.signInbutton} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
