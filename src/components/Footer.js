import React from "react";
import { Grid, Stack, Typography, Container, Divider } from "@mui/material";
import dateformat from "dateformat";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";

import Logo from "../assets/logo_white.png";
import Facebook from "../assets/social/facebook.png";
import Instagram from "../assets/social/instagram.png";
import Linkedin from "../assets/social/linkedin.png";
import Twitter from "../assets/social/twitter.png";

function Footer(props) {
  return (
    <Container
      className="footer"
      maxWidth="xl"
      sx={{
        width: "100%",
        bgcolor: "#3E4756",
        m: 0,
        px: { xs: 2, sm: 20, md: 5 },
        py: { xs: 10, md: 5 },
        color: "#FFFFFF",
      }}
    >
      <Grid
        container
        rowGap={2}
        sx={{
          mx: "auto",
          maxWidth: "1200px",
        }}
      >
        <Grid item md={3} xs={12} sx={{ paddingLeft: 2 }}>
          <Stack direction="row" alignItems="center">
            <img
              src={Logo}
              alt="Comp-rite Kenya"
              aria-label="Comp-rite Kenya"
              width="50px"
              height="50px"
            />
            <Typography variant="body1" mx={1} sx={{ fontSize: "18px" }}>
              Comp-rite Kenya
            </Typography>
          </Stack>

          <Typography variant="body1" my={1}>
            Comp-rite Kenya Ltd is a locally owned and operated company that has
            been in existence since 1972.
          </Typography>
          <Typography variant="h6">Follow us</Typography>

          <Stack direction="row" spacing={1}>
            <img
              src={Facebook}
              alt="Facebook"
              aria-label="Facebook"
              width="40px"
            />
            <img
              src={Twitter}
              alt="Twitter"
              aria-label="Twitter"
              width="40px"
            />
            <img
              src={Linkedin}
              alt="Linkedin"
              aria-label="Linkedin"
              width="40px"
            />
            <img
              src={Instagram}
              alt="Instagram"
              aria-label="Instagram"
              width="40px"
            />
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} sx={{ paddingLeft: 2 }}>
          <Stack>
            <Stack direction="row" alignItems="center">
              <PlaceIcon />
              <Typography
                variant="h6"
                mx={1}
                sx={{ fontSize: { xs: "1.25rem", md: "18px", lg: "1.25rem" } }}
              >
                Physical address
              </Typography>
            </Stack>
            <Typography variant="body1">Comp-rite Kenya Limited</Typography>
            <Typography variant="body1">
              2nd Floor, Muthaiga Mini Market,
            </Typography>
            <Typography variant="body1">Limuru road</Typography>
            <Typography variant="body1">P.O. Box 63428-00619</Typography>
            <Typography variant="body1">Nairobi, Kenya</Typography>
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} sx={{ paddingLeft: 2 }}>
          <Stack>
            <Stack direction="row" alignItems="center">
              <PhoneIcon />
              <Typography
                variant="h6"
                mx={1}
                sx={{ fontSize: { xs: "1.25rem", md: "18px", lg: "1.25rem" } }}
              >
                Contact us
              </Typography>
            </Stack>
            <Typography variant="body1">Email: info@comp-rite.com</Typography>
            <Typography variant="body1">Telephone: +254-20-269-0955</Typography>
            <Typography variant="body1">Cell: +254 723-611786</Typography>
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} sx={{ paddingLeft: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "1.25rem", md: "18px", lg: "1.25rem" } }}
          >
            Useful links
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "block" }}
            as="a"
            href="https://www.nse.co.ke/"
          >
            Nairobi Securities Exchange
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "block" }}
            as="a"
            href="https://www.cdsckenya.com/"
          >
            CDSC
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "block" }}
            as="a"
            href="https://www.cma.or.ke/"
          >
            Capital Markets Authority(CMA)
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "block" }}
            as="a"
            href="https://ufaa.go.ke/"
          >
            Unclaimed Financial Assets Authority(UFAA)
          </Typography>
        </Grid>
      </Grid>
      <Divider light sx={{ my: 2, borderColor: "#606060" }} />
      <Typography variant="body1" textAlign="center">
        © Copyright {dateformat(Date.now(), "yyyy")} Comp-rite Kenya
      </Typography>
    </Container>
  );
}

export default Footer;
