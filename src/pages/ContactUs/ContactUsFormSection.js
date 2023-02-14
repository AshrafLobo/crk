import React from "react";

import { Container, Stack, Typography } from "@mui/material";
import { ContactUsForm } from "../../components/forms/";

function ContactUsFormSection(props) {
  return (
    <Container
      disableGutters
      sx={{ mx: "auto", p: { xs: 2, md: 5, lg: 10 }, maxWidth: "1000px !important" }}
    >
	<Stack spacing={1} sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Enquire about our services
          </Typography>
          <Typography variant="body1" color="#A0A0A0">
            Please fill in the the form below and we will get back to you
            shortly.
          </Typography>
        </Stack>
      <ContactUsForm />
    </Container>
  );
}

export default ContactUsFormSection;
