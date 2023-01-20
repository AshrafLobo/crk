import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

import { ColoredBox, Pay100CardSection } from "./";

import Fast from "../../assets/customIcons/fast.png";
import Accurate from "../../assets/customIcons/accurate.png";
import Affordable from "../../assets/customIcons/affordable.png";
import Easy from "../../assets/customIcons/easy.png";

function PayrollFeatures(props) {
  return (
    <Grid container sx={{ my: 10 }}>
      <Grid item xs={12} md={6}>
        <Stack
          sx={{ display: "flex", justifyContent: { xs: "center", md: "left" } }}
        >
          <Stack
            spacing={1}
            sx={{
              textAlign: { xs: "center", md: "left" },
              ml: 2,
              mb: 5,
            }}
          >
            <Typography
              variant="body1"
              component="span"
              sx={{
                bgcolor: "#3E4756",
                color: "#FFFFFF",
                width: "fit-content",
                mx: { xs: "auto", md: 0 },
                px: 2,
                fontSize: "14px",
              }}
            >
              FEATURES
            </Typography>

            <Typography variant="h4" component="h1" sx={{ fontWeight: "1000" }}>
              PAY 100 PLUS FEATURES
            </Typography>
          </Stack>

          <Grid
            container
            sx={{ maxWidth: "1000px", mx: { xs: "auto", lg: 0 } }}
          >
            {features.map((feature) => (
              <Grid item xs={12} sm={6} key={`feature-${feature.id}`}>
                <ColoredBox {...feature} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Pay100CardSection />
      </Grid>
    </Grid>
  );
}

const DARKBLUE = "#3E4756";
const GRAY = "#F2F2F2";

const features = [
  {
    id: 1,
    bgColor: DARKBLUE,
    color: "#FFFFFF",
    image: Fast,
    imageAlt: "Fast",
    title: "Fast",
    text: `Your Windows-based computer maintains and computes all the data, 
    the time you waste on writing down and calculating your payroll is saved. 
    Even on an old 486, it takes less than a minute to process payroll for a 
    company.`,
  },
  {
    id: 2,
    bgColor: GRAY,
    color: DARKBLUE,
    image: Affordable,
    imageAlt: "Affordable",
    title: "Affordable",
    text: `Our Competitive Pricing means that Pay100 is an ideal solution for 
    all businesses whether you’re a small, medium, or a large company; At Kshs 
    27,724 inclusive of VAT, and 1 Year of Support it is one of the most 
    affordable payroll packages available in Kenya and offers all of the 
    advantages of outsourcing without the cost!`,
  },
  {
    id: 3,
    bgColor: DARKBLUE,
    color: "#FFFFFF",
    image: Accurate,
    imageAlt: "Accurate",
    title: "Accurate",
    text: `Pay100 Plus ensures that your payroll is processed with absolute 
    precision. Simple transcription errors or inversion errors can cost you a lot 
    of money and wasted time. Pay100 lets enter data once and manage and use it 
    over time without having to reenter it every time. This results in 100% 
    Accurate system.`,
  },
  {
    id: 4,
    bgColor: GRAY,
    color: DARKBLUE,
    image: Easy,
    imageAlt: "Easy",
    title: "Easy to use",
    text: `Pay100 has been developed to be able to be used with minimum technical 
    expertice. A comprehensive documention is provided with purchase of the 
    software that explains how to work with the software. In case of errors, you 
    can get in touch with our technical experts to walk you through and fix any 
    problems.`,
  },
];

export default PayrollFeatures;
