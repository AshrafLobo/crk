import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

import Pay100Background from "../../assets/background-4.png";

function Pay100Banner(props) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#3E4756"
        sx={{
          py: { xs: 5, lg: 0 },
          minHeight: "400px",
        }}
      >
        <Stack
          mx={{ xs: 5, lg: 8 }}
          spacing={3}
          sx={{ maxWidth: "400px", textAlign: { xs: "center", md: "left" } }}
        >
          <Stack spacing={1}>
            <Typography
              variant="body1"
              component="span"
              sx={{
                bgcolor: "#0F75BD",
                color: "#ffffff",
                width: "fit-content",
                mx: { xs: "auto", md: 0 },
                px: 2,
                fontSize: "14px",
              }}
            >
              SOFTWARE
            </Typography>

            <Typography
              variant="h4"
              component="h1"
              color="white"
              sx={{ fontWeight: "bold" }}
            >
              PAY 100 PLUS
            </Typography>
          </Stack>

          <Typography variant="body1" color="white">
            Pay100 Plus is a Kenyan payroll processing system for small, medium
            and large companies. It offers numerous benefits at an affordable
            cost.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={7}>
        <img
          src={Pay100Background}
          alt="Pay100"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Pay100Banner;
