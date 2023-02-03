import React from "react";
import { Grid, Typography, Stack } from "@mui/material";

import { PayrollForm } from "../../components";
import { FaqSection } from "./";

function PayrollFormSection(props) {
  return (
    <Grid container sx={{ minHeight: "500px", width: "100%" }}>
      <Grid item xs={12} md={6} sx={{ minHeight: "500px" }}>
        <FaqSection />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 2, textAlign: "center" }}>
        <Stack spacing={1} sx={{ py: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Enquire about our payroll services
          </Typography>
          <Typography variant="body1" color="#A0A0A0">
            Please fill in the the form below and we will get back to you
            shortly.
          </Typography>
        </Stack>
        <PayrollForm />
      </Grid>
    </Grid>
  );
}

export default PayrollFormSection;
