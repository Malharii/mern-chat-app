// import React from "react";

import Title from "../shared/Title";
import Header from "./Header";
import { Grid } from "@mui/material";
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            height={"100%"}
          >
            frist
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            sx={{
              display: {
                xs: "none",
                md: "block",
                padding: "2rem",
                backgroundColor: "#455a64",
              },
            }}
            md={4}
            lg={3}
            height={"100%"}
          >
            third
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
