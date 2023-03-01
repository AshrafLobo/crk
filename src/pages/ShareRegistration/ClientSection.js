import React, { useState, useEffect } from "react";
import { Stack, Grid, Typography } from "@mui/material";

import { IssuerCard } from "../../components";
import useData from "../../hooks/useData";

function ClientSection(props) {
  const [get] = useData();
  const [issuers, setIssuers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await get("issuers");
      setIssuers(data);
    })();
  }, []);

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
        sx={{ width: "100%", p: { xs: 2, md: 5, lg: 10 } }}
      >
        {issuers &&
          issuers.map((issuer) => (
            <Grid item xs={12} md={4} key={`issuer-${issuer.id}`}>
              <IssuerCard issuer={issuer} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default ClientSection;
