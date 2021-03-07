import React from "react";
import Navbar from "../Navbar/Navbar";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid, FormControl, InputLabel, Input } from "@material-ui/core";
import style from "./Signup.module.css";

function SignUp() {
  return (
    <div>
      {/* <Navbar /> */}
      <Grid xs={12} container justify="center">
        <Grid xs={10} justify="center">
          <Typography variant="h2">Register</Typography>
          <Typography variant="body1" style={{ borderBottom: "1px solid #00040a" }}>
            PERSONAL DETAILS
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "30px" }}>
            Enter your email address and password to Register your account.
          </Typography>
          <Grid container direction="column" justify="center">
            {/* <InputLabel htmlFor="username">Username</InputLabel> */}
            <label htmlFor="firstName" className={style.label}>
              First Name
            </label>
            <input id="firstName" type="firstName" className={style.input} placeholder="First Name" />
          </Grid>
          <Grid container direction="column" justify="center">
            {/* <InputLabel htmlFor="username">Username</InputLabel> */}
            <label htmlFor="lastName" className={style.label}>
              Last Name
            </label>
            <input id="lastName" type="lastName" className={style.input} placeholder="Last Name" />
          </Grid>
          <Grid container direction="column" justify="center">
            {/* <InputLabel htmlFor="username">Username</InputLabel> */}
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input id="email" type="email" className={style.input} placeholder="Email" />
          </Grid>
          <Grid container direction="column" justify="center">
            {/* <InputLabel htmlFor="username">Username</InputLabel> */}
            <label htmlFor="Password" className={style.label}>
              Password
            </label>
            <input id="Password" type="password" className={style.input} placeholder="Password" />
          </Grid>
          <input type="button" value="Register" className={style.signInbutton} />
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;
