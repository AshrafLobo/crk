import React from "react";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { NewsCard } from "../../components";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import TotalLogo from "../../assets/issuerLogos/total_logo_small.png";
import HFLogo from "../../assets/issuerLogos/hf_logo_small.png";

function NewsSection(props) {
  return (
    <Paper
      sx={{
        textAlign: "center",
        py: 10,
        px: { sm: 3, lg: 10 },
        bgcolor: "#FEFEFE",
        position: "relative",
        borderRadius: 0,
      }}
    >
      <Stack spacing={5}>
        <Stack spacing={0}>
          <Typography
            variant="body1"
            component="span"
            sx={{
              bgcolor: "#3E4756",
              color: "#ffffff",
              width: "fit-content",
              px: 2,
              mx: "auto",
              mb: 1,
              fontSize: "14px",
            }}
          >
            NEWS
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mx: 2 }}
          >
            News and information
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: "#A0A0A0", mx: 2 }}
          >
            See the latest news and information from our clients
          </Typography>
        </Stack>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            width: "100%",
            paddingRight: 2,
          }}
        >
          {news.map((item) => (
            <Grid item xs={12} md={4} key={`issuer-${item.id}`}>
              <NewsCard news={item} />
            </Grid>
          ))}
        </Grid>

        <Button
          type="button"
          variant="contained"
          endIcon={<ArrowRightIcon />}
          sx={{
            width: "200px",
            alignSelf: "center",
            mx: { xs: "auto !important", md: "0 !important" },
            py: 1,
            lineHeight: "0",
            borderRadius: "50px",
            backgroundColor: "#DDA01E",
            "&:hover": {
              bgcolor: "#DDA01E",
              opacity: "0.9",
            },
          }}
        >
          See more
        </Button>
      </Stack>
    </Paper>
  );
}

const news = [
  {
    id: 1,
    name: "Housing Finance Group",
    date: "Monday, December 6, 2021",
    time: "9:44 AM",
    title:
      "HF Group Plc - Unaudited Financial Statements & Other Disclosures for the Period Ended 30-Sep-2021",
    text: "The following are HF Group Plc - Unaudited Financial Statements & Other Disclosures for the Period Ended 30-Sep-2021. Click the link bellow to read the full article.",
    logo: HFLogo,
  },

  {
    id: 2,
    name: "Housing Finance Group",
    date: "Tuesday, November 16, 2021",
    time: "9:35 AM",
    title: "HF Group Plc - Shareholders Update",
    text: "HF Group Plc has commenced the process of inviting strategic investors to acquire a stake in the Company (the Proposed Transaction) as disclosed in the published 2020 Financial Statements. Read the full article by clicking the link below.",
    logo: HFLogo,
  },
  {
    id: 3,
    name: "Total Kenya",
    date: "Friday, October 1, 2021",
    time: "8:06 AM",
    title: "TotalEnergies PLC - Appointment of Director & Chairman",
    text: "The Board of Directors of TotalEnergies Marketing Kenya Plc is pleased to announce the appointment of Mr. Olivier Van Parys as a Director and Chairman of the Board with effect from 21 September 2021. Read the full article by clicking the link below",
    logo: TotalLogo,
  },
];

export default NewsSection;
