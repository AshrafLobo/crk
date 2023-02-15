import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";

function ReusableBanner({
  image,
  altImage,
  title,
  subtitle,
  text,
  buttonText,
  handleButtonClick,
}) {
  return (
    <Grid container sx={{ minHeight: "550px" }}>
      <Grid
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        sx={{
          py: { xs: 5, md: 0 },
        }}
      >
        <img
          src={image}
          alt={altImage}
          style={{ maxWidth: "600px", width: "100%" }}
        />
      </Grid>
      <Grid
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        bgcolor="#0F75BD"
        sx={{
          minHeight: "400px",
          py: { xs: 5, lg: 0 },
          borderRadius: { xs: "0px", md: "0px 0px 0px 50px" },
        }}
      >
        <Stack
          mx={{ xs: 5, sm: 10, lg: 8 }}
          spacing={3}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Stack spacing={1}>
            <Typography
              variant="body1"
              component="span"
              sx={{
                bgcolor: "#3E4756",
                color: "#ffffff",
                width: "fit-content",
                mx: { xs: "auto", md: 0 },
                px: 4,
                fontSize: "14px",
              }}
            >
              {subtitle}
            </Typography>

            <Typography
              variant="h3"
              component="h1"
              color="white"
              sx={{ fontWeight: "bold", fontSize: "40px" }}
            >
              {title}
            </Typography>
          </Stack>

          <Typography variant="body1" color="white">
            {text}
          </Typography>
          {buttonText ? (
            <Button
              type="button"
              variant="contained"
              onClick={handleButtonClick}
              sx={{
                width: "fit-content",
                mx: { xs: "auto !important", md: "0 !important" },
                py: "20px",
                px: 5,
                borderRadius: "50px",
                backgroundColor: "#DDA01E",
                lineHeight: "0",
                "&:hover": {
                  bgcolor: "#DDA01E",
                  opacity: "0.9",
                },
				fontSize: {xs: '10px', sm: '0.875rem'}
              }}
            >
              {buttonText}
            </Button>
          ) : null}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ReusableBanner;
