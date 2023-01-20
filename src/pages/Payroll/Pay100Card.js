import React from "react";
import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

function Pay100Card({ image, imageAlt, version, price, features }) {
  return (
    <Card
      elevation={2}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        color: "#FFFFFF",
        bgcolor: "#3E4756",
        width: "250px",
        mx: "auto",
        borderRadius: "25px",

        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      <Stack spacing={2} p={3} width="100%">
        <Stack sx={{ display: "inline", mx: "auto" }}>
          <img src={image} alt={imageAlt} width="60px" />
        </Stack>

        <Typography variant="h6" component="p" sx={{ fontSize: "16px" }}>
          {version}
        </Typography>
        <Divider color="#FFFFFF" />

        <Typography
          variant="h5"
          component="p"
          sx={{ color: "#FFFFFF", fontWeight: "bold" }}
        >
          {price}
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: "left", fontWeight: "bold", fontSize: "14px" }}
        >
          Features:
        </Typography>

        <Stack spacing={1}>
          {features.map((feature) => (
            <Stack direction="row" spacing={1} key={feature}>
              <CheckIcon sx={{ color: "#DDA01E", fontSize: "20px" }} />
              <Typography variant="body2" sx={{ fontSize: "12px" }}>
                {feature}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Button
          variant="contained"
          sx={{ bgcolor: "#DDA01E", borderRadius: "50px", fontSize: "12px" }}
        >
          REQUEST A DEMO
        </Button>

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            position: "absolute",
            top: 5,
            right: 20,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            diplay: "inline",
          }}
        />
      </Stack>
    </Card>
  );
}

export default Pay100Card;
