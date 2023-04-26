import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function ContactusBanner(props) {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={3}
      py={15}
      bgcolor="#0F75BD"
      sx={{ color: "white", textAlign: "center" }}
    >
      <Stack spacing={0}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mx: 2 }}
        >
          We're eager to hear from you
        </Typography>
        <Typography variant="body1" component="p" sx={{ mx: { xs: 2, sm: 5 } }}>
          Have an urgent question? Send us a message. Click the button below to
          go to our contact us page.
        </Typography>
      </Stack>

      <Button
        type="button"
        variant="contained"
        endIcon={<ArrowRightIcon />}
        onClick={() => navigate("contact_us")}
        sx={{
          width: "200px",
          alignSelf: "center",
          mx: { xs: "auto !important", md: "0 !important" },
          py: 1,
          borderRadius: "50px",
          backgroundColor: "#DDA01E",
          lineHeight: "0",
          "&:hover": {
            bgcolor: "#DDA01E",
            opacity: "0.9",
          },
        }}
      >
        Contact us
      </Button>
    </Stack>
  );
}

export default ContactusBanner;
