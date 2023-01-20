import React from "react";
import {
  Grid,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { PayrollForm } from "../../components";

function PayrollFormSection(props) {
  return (
    <Grid container sx={{ minHeight: "500px", width: "100%" }}>
      <Grid item xs={12} md={6} sx={{ minHeight: "500px" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
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
