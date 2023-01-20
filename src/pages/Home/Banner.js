import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircleIcon from "@mui/icons-material/Circle";

import Background1 from "../../assets/background-1.png";
import Background2 from "../../assets/background-2.png";
import Background3 from "../../assets/background-3.png";

function Banner(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { title, description, image, imageAlt, buttonText, buttonAction } =
    slides[currentSlide];
  const no_of_slides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        if (currentSlide === no_of_slides - 1) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, no_of_slides, isPaused]);

  return (
    <Grid
      container
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{ minHeight: "600px" }}
    >
      <Grid
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
        xs={12}
        md={6}
        bgcolor="#0F75BD"
        sx={{
          py: { xs: 5, lg: 0 },
        }}
        order={{ xs: 2, md: 1 }}
      >
        <Stack
          mx={{ xs: 5, sm: 10, lg: 8 }}
          spacing={3}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <>{title}</>

          <Typography variant="body1" color="white">
            {description}
          </Typography>

          <Button
            type="button"
            variant="contained"
            endIcon={<ArrowRightIcon />}
            sx={{
              width: "200px",
              mx: { xs: "auto !important", md: "0 !important" },
              py: "10px",
              borderRadius: "50px",
              backgroundColor: "#DDA01E",
              lineHeight: "0",
              "&:hover": {
                bgcolor: "#DDA01E",
                opacity: "0.9",
              },
            }}
            onClick={buttonAction}
          >
            {buttonText}
          </Button>

          <Stack
            direction="row"
            spacing={0}
            sx={{ mx: { xs: "auto !important", md: "0 !important" } }}
          >
            {slides.map((item, index) => {
              let { circleColor, circleSize } =
                currentSlide === index
                  ? { circleColor: "#DDA01E", circleSize: "16px" }
                  : { circleColor: "inherit", circleSize: "12px" };
              return (
                <IconButton
                  sx={{ p: "2px" }}
                  key={`step-${index}`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <CircleIcon
                    sx={{ color: circleColor, fontSize: circleSize }}
                  />
                </IconButton>
              );
            })}
          </Stack>
        </Stack>
      </Grid>

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
        order={{ xs: 1, md: 2 }}
      >
        <img
          src={image}
          alt={imageAlt}
          style={{ maxWidth: "600px", width: "100%" }}
        />
      </Grid>
    </Grid>
  );
}

const slides = [
  {
    title: (
      <Typography
        variant="h3"
        component="h1"
        color="white"
        sx={{ fontWeight: "bold" }}
      >
        Welcome to <br /> Comp-rite Kenya Limited
      </Typography>
    ),
    description: `Comp-rite Kenya Ltd is a locally owned and operated company that has
    been in existence since 1972. Our core strengths have always been
    technology focused, and over the years, Comp-rite remains at the
    forefront of providing customized software and technology based
    solutions to a diverse range of corporations in Kenya.`,
    image: Background1,
    imageAlt: "Comp-rite Office",
    buttonText: "Send us a message",
    buttonAction: function () {
      alert("Slide 1 Clicked");
    },
  },
  {
    title: (
      <Typography
        variant="h3"
        component="h1"
        color="white"
        sx={{ fontWeight: "bold" }}
      >
        Learn about our <br /> Payroll Services
      </Typography>
    ),
    description: `Pay100 Plus is a Kenyan payroll processing system for small, medium, 
    and large companies. It offers numerous benefits at an affordable cost.`,
    image: Background3,
    imageAlt: "Comp-rite Payroll",
    buttonText: "Find out more",
    buttonAction: function () {
      alert("Slide 3 Clicked");
    },
  },
  {
    title: (
      <Typography
        variant="h3"
        component="h1"
        color="white"
        sx={{ fontWeight: "bold" }}
      >
        Learn about our <br /> Shareholder Services
      </Typography>
    ),
    description: `We provide share registration services to companies of all sizes. 
    Our services are powered by our custom built solution, iSharePro.`,
    image: Background2,
    imageAlt: "Comp-rite Shares Department",
    buttonText: "Find out more",
    buttonAction: function () {
      alert("Slide 2 Clicked");
    },
  },
];

export default Banner;
