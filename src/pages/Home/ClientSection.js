import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IssuerCard } from "../../components";
import { useData } from "../../hooks";

function ClientSection(props) {
  const { get } = useData();
  const [issuers, setIssuers] = useState([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    (async () => {
      const { data } = await get("issuers");
      const firstThree = data.slice(0, 3);
      setIssuers(firstThree);
    })();
  }, []);

  return (
    <Paper
      sx={{
        textAlign: "center",
        py: 10,
        px: { sm: 3, lg: 10 },
        bgcolor: "#FEFEFE",
        position: "relative",
        borderRadius: 0,
        boxShadow:
          "0px -3px 5px -1px rgb(0 0 0 / 20%), 0px -5px 8px 0px rgb(0 0 0 / 14%), 0px -1px 14px 0px rgb(0 0 0 / 12%)",
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
            OUR CLIENTS
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mx: 2 }}
          >
            Who we've worked with
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: "#A0A0A0", mx: 2 }}
          >
            See some of the companies we have the opportunity to work with.
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
          {issuers &&
            issuers.map((issuer) => (
              <Grid item xs={12} md={4} key={`issuer-${issuer.id}`}>
                <IssuerCard issuer={issuer} />
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
          onClick={() => navigate("share_registration")}
        >
          See more
        </Button>
      </Stack>
    </Paper>
  );
}

export default ClientSection;
