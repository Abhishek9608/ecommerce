import React from "react";
import Navbar from "../Navbar/Navbar";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { Typography, Grid, FormControl, InputLabel, Input } from "@material-ui/core";
import style from "./Login.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Login() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      {/* <Navbar /> */}
      <Grid xs={12} container justify="center" style={{ backgroundColor: "#fff" }}>
        <Grid xs={12} justify="center">
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
          <Grid container justify="center" alignItems="center">
            <label htmlFor="" className={style.label}>
              <FormControlLabel control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />} label="Remember me" />
            </label>
          </Grid>
          <input type="button" value="SignIn" className={style.signInbutton} />
          <Grid container justify="center" alignItems="center">
            <Typography variant="" className={style.label}>
              <Link> Forgot your password?</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
