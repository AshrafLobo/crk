import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import Drawer from "./Drawer";
import Logo from "../assets/logo.png";

function Navbar(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      className="navbar"
      position="sticky"
      sx={{ bgcolor: "white", color: "#0A0A0A" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          disableRipple
          onClick={() => navigate("/")}
        >
          <img
            src={Logo}
            alt="Logo"
            width="50px"
            height="50px"
            aria-label="Comp-rite Logo"
          />
        </IconButton>
        <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
          Comp-rite Kenya
        </Typography>

        {isMatch ? (
          <Drawer PAGES={PAGES} />
        ) : (
          <>
            <Stack direction="row" spacing={3}>
              {PAGES.map((page, index) => (
                <NavLink
                  to={page.link}
                  key={`nav-${page.link}-${index}`}
                  style={{
                    px: 0,
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    lineHeight: "1.25",
                    letterSpacing: "0.02857em",
                    color: "#757575",
                  }}
                >
                  {page.text}
                </NavLink>
              ))}
            </Stack>

            <Button
              variant="contained"
              disableElevation
              sx={{
                ml: 4,
                borderRadius: "25px",
                backgroundColor: "#0F75BD",
              }}
              onClick={() =>
                (window.location.href =
                  "https://secure.comp-rite.co.ke/register/login")
              }
            >
              AGM portal
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

const PAGES = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About us" },
  { link: "/payroll", text: "Payroll" },
  { link: "/share_registration", text: "Share registration" },
  { link: "/news", text: "News" },
  { link: "/contact_us", text: "Contact us" },
];

export default Navbar;
