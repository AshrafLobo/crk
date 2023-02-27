import { Button, Card, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

import CardBackground1 from "../../assets/card_background1.png";
import CardBackground2 from "../../assets/card_background2.png";

function ServiceCard({
  service: { image, imageAlt, service, serviceText, buttonText, handleButtonClick },
}) {
  return (
    <Card
      elevation={1}
      sx={{
        maxWidth: "300px",
        mx: "auto",
        borderRadius: "25px",

        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <img
        src={image}
        alt={imageAlt}
        style={{
          width: "100%",
          overflow: "hidden",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "relative",
          height: "fit-content",
        }}
      >
        <img
          src={CardBackground1}
          alt="Card Background 1"
          style={{
            width: "40px",
            height: "fit-content",
            position: "absolute",
            objectFit: "contain",
            top: 10,
            right: 10,
            opacity: "0.75",
          }}
        />

        <img
          src={CardBackground2}
          alt="Card Background 2"
          style={{
            width: "50px",
            height: "fit-content",
            position: "absolute",
            objectFit: "contain",
            bottom: 10,
            left: 10,
            opacity: "0.75",
          }}
        />
        <Stack
          spacing={1}
          sx={{
            zIndex: 20,
            py: 5,
            mx: { xs: 5, sm: 3, lg: 5 },
            textAlign: "center",
          }}
        >
          <Stack spacing={0}>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontWeight: "800",
                fontSize: "14px",
                color: "#3E4756",
              }}
            >
              {service}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ minHeight: "100px", color: "#505050", fontSize: "13px" }}
            >
              {serviceText}
            </Typography>
          </Stack>

          <Button
            type="button"
            variant="contained"
            disableElevation
            sx={{
              p: 2,
              borderRadius: "50px",
              backgroundColor: "#DDA01E",
              lineHeight: "0",
              fontSize: { xs: "12px", sm: "10px", lg: "12px" },
            }}
			onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}

export default ServiceCard;
