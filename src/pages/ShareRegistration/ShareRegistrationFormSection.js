import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { FaqSection } from "./";
import { ShareRegistrationForm } from "../../components/forms";

function ShareRegistrationFormSection(props) {
  return (
    <Grid container sx={{ minHeight: "500px", width: "100%" }}>
      <Grid item xs={12} md={6} sx={{ minHeight: "500px", display:'flex', alignItems: 'center' }}>
        <FaqSection />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 2, textAlign: "center" }}>
        <Stack spacing={1} sx={{ py: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Enquire about our share registration services
          </Typography>
          <Typography variant="body1" color="#A0A0A0">
            Please fill in the the form below and we will get back to you
            shortly.
          </Typography>
        </Stack>
		<Box sx={{ p: 3 }}>
			<ShareRegistrationForm />
		</Box>
      </Grid>
    </Grid>
  );
}

export default ShareRegistrationFormSection;
