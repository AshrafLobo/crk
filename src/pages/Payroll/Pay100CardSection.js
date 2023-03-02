import React, { useState } from "react";
import { Grid } from "@mui/material";

import { Pay100Card } from "./";

import Demo from "../../assets/customIcons/demo.png";
import Full from "../../assets/customIcons/full.png";

function Pay100CardSection(props) {
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Grid item xs={12} sm={5} md={6} lg={5} sx={{ my: { xs: 3, lg: 0 } }}>
          <Pay100Card {...cards[0]} />
        </Grid>
        <Grid item xs={12} sm={5} md={6} lg={5} sx={{ my: { xs: 3, lg: 0 } }}>
          <Pay100Card {...cards[1]} />
        </Grid>
      </Grid>
    </>
  );
}

const cards = [
  {
    image: Demo,
    imageAlt: "Demo",
    version: "DEMO VERSION",
    price: "FREE",
    features: [
      "Payroll processing",
      "2 Month license",
      "Only 30 program launches",
      "Data carried to full version",
    ],
  },
  {
    image: Full,
    imageAlt: "Full",
    version: "FULL VERSION",
    price: "27,724 KSH",
    features: [
      "Payroll processing",
      "1 Year license",
      "Unlimited program launches",
      "Free online tech support",
    ],
  },
];

export default Pay100CardSection;
