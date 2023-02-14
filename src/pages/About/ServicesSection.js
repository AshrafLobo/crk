import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { ServiceCard } from "./";

import ServiceCardImage1 from "../../assets/services_image1.png";
import ServiceCardImage2 from "../../assets/services_image2.png";

function ServicesSection(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <Grid container sx={{ minHeight: "500px", mt: { xs: 0, md: 5 } }}>
        <Grid
          item
          display="flex"
          alignItems="center"
          justifyContent="center"
          xs={12}
          md={5}
          bgcolor="#3E4756"
          sx={{
            minHeight: "400px",
            py: { xs: 5, lg: 0 },
            borderRadius: { xs: "0px", md: "0px 0px 50px 0px" },
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
                OUR MISSION
              </Typography>

              <Typography
                variant="h4"
                component="h2"
                color="white"
                sx={{ fontWeight: "bold" }}
              >
                WHAT WE DO
              </Typography>
            </Stack>

            <Typography variant="body1" color="white">
              Want to learn about what we do? Take a look at our list of
              services. It will give you a comprehensive guide on what services
              we offer.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          display="flex"
          alignItems="center"
          justifyContent="center"
          xs={12}
          md={7}
          sx={{
            py: { xs: 5, md: 0 },
          }}
        >
          <Grid
            container
            rowGap={{ xs: 2, sm: 0 }}
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            {SERVICES.map((service, index) => (
              <Grid
                item
                key={`service-${index}`}
                xs={12}
                sm={6}
                px={{ xs: 0, sm: 2 }}
              >
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: { xs: "100%", md: "60%" },
          position: "absolute",
          bottom: 0,
          bgcolor: "#0F75BD",
          zIndex: -1,
        }}
      ></Box>
    </Box>
  );
}

const SERVICES = [
  {
    image: ServiceCardImage1,
    imageAlt: "Payroll Services",
    service: "PAYROLL",
    serviceText:
      "Pay100 Plus is a Kenyan payroll processing system for small, medium, and large companies. It offers numerous benefits at an affordable cost.",
    buttonText: "PAYROLL SERVICES",
  },
  {
    image: ServiceCardImage2,
    imageAlt: "Shareholder Services",
    service: "SHAREHOLDER SERVICES",
    serviceText:
      "We provide share registration services to companies of all sizes. Our services are powered by our custom built solution, iSharePro.",
    buttonText: "SHAREHOLDER SERVICES",
  },
];

export default ServicesSection;
