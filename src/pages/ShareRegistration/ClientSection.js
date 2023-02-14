import React from "react";
import { Stack, Grid, Typography } from "@mui/material";

import { IssuerCard } from "../../components";
import TotalLogo from "../../assets/issuerLogos/total_logo_large.png";
import HFLogo from "../../assets/issuerLogos/hf_logo_large.jpg";
import ARMLogo from "../../assets/issuerLogos/arm_logo_large.png";
import DTBKELogo from "../../assets/issuerLogos/dtb_ke_logo_large.jpg";
import DTBTZLogo from "../../assets/issuerLogos/dtb_tz_logo_large.jpg";

function ClientSection(props) {
  return (
    <>
      <Stack
        spacing={0}
        sx={{ maxWidth: "600px", textAlign: "center", mt: 10, mx: "auto" }}
      >
        <Typography
          variant="body1"
          component="span"
          sx={{
            bgcolor: "#3E4756",
            color: "#ffffff",
            width: "fit-content",
            mx: "auto",
            mb: 1,
            px: 2,
            fontSize: "14px",
          }}
        >
          OUR ISSUERS
        </Typography>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "1000" }}>
          OUR CLIENTS
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: "#A0A0A0" }}>
          Comp-rite Kenya Ltd handles share registration services for the
          following companies
        </Typography>
      </Stack>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ p: { xs: 2, md: 5, lg: 10 } }}
      >
        {issuers.map((issuer) => (
          <Grid item xs={12} md={4} key={`issuer-${issuer.id}`}>
            <IssuerCard issuer={issuer} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const issuers = [
  {
    id: 1,
    name: "Total Kenya",
    description: "Oil and petroleum suppliers",
    logo: TotalLogo,
  },

  {
    id: 2,
    name: "Housing Finance Group",
    description: "Morgage finance provider",
    logo: HFLogo,
  },
  {
    id: 3,
    name: "Athi River Mining",
    description: "Mining and manufacturing",
    logo: ARMLogo,
  },
  {
    id: 4,
    name: "Diamond Trust Bank Kenya",
    description: "Banking Group",
    logo: DTBKELogo,
  },
  {
    id: 5,
    name: "Diamond Trust Bank Tanzania",
    description: "Banking Group",
    logo: DTBTZLogo,
  },
];

export default ClientSection;
