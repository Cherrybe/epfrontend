import React from "react";
import { Grid, Box } from "@mui/material";
import LoginImg from "../components/Login/LoginImg";
import { LoginForm } from "../components/Login/LoginFields";

const LoginPage = () => {
  return (
    <Grid container columns={12}>
      <Grid item xs={12} md={6} display={["none", "none", "block"]}>
        <LoginImg />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "100vh",
          }}
        >
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
