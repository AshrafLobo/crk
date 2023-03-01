import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import useData from "../../hooks/useData";

function DescriptionSection({
  issuer: { name, srcSmall, title, description },
}) {
  const navigate = useNavigate();
  const [issuers, setIssuers] = useState([]);
  const [get] = useData();

  useEffect(() => {
    (async () => {
      const { data } = await get("issuers");
      setIssuers(data);
    })();
  }, []);

  return (
    <Grid container sx={{ bgcolor: "background.paper", px: { xs: 3, lg: 0 } }}>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ mx: 3 }}>
          <img
            src={`${process.env.REACT_APP_API_URL}/${srcSmall}`}
            alt={`${name} Logo`}
            style={{
              objectFit: "contain",
              width: "100%",
              maxWidth: "300px",
              height: "300px",
            }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Stack spacing={2} sx={{ my: { xs: 1, lg: 3 } }}>
          <Typography
            variant="h5"
            as="h1"
            sx={{
              fontWeight: "bolder",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            as="h2"
            sx={{
              color: "#A0A0A0",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            {title}
          </Typography>
          <Divider light sx={{ my: 2, borderColor: "#eaeaea" }} />
          <Typography
            variant="body1"
            sx={{ textAlign: { xs: "center", lg: "left" } }}
          >
            {description}
          </Typography>
          <Button
            type="button"
            variant="contained"
            sx={{
              mx: { xs: "auto", lg: 0 },
              width: { xs: "100%", sm: "fit-content" },
              py: 2,
              px: 3,
              height: "30px",
              fontSize: { xs: "10px", sm: "12px", md: "10px", lg: "12px" },
              borderRadius: "50px",
              backgroundColor: "#DDA01E",
              "&:hover": {
                bgcolor: "#DDA01E",
                opacity: "0.9",
              },
            }}
            onClick={() => navigate("/share_registration")}
          >
            Enquire about company
          </Button>
        </Stack>
      </Grid>

      <Grid item xs={12} lg={4} sx={{ display: { xs: "none", lg: "block" } }}>
        <List
          className="issuersList"
          sx={{ ml: 4, width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="issuers-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="issuers-list-subheader"
              sx={{ fontSize: "18px !important" }}
            >
              Our Issuers
            </ListSubheader>
          }
        >
          {issuers &&
            issuers.map((issuer) => (
              <ListItem key={`issuer-${issuer.id}`}>
                <ListItemText sx={{ m: 0 }}>
                  <NavLink
                    to={`/issuer/${issuer.id}`}
                    sx={{ color: "#0a0a0a !important" }}
                  >
                    {issuer.name}
                  </NavLink>
                </ListItemText>
              </ListItem>
            ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default DescriptionSection;
