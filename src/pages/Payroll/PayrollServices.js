import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import { ColoredBox } from "../../components";

import FTP from "../../assets/customIcons/ftp.png";
import Payroll from "../../assets/customIcons/payroll.png";
import StatutoryManagement from "../../assets/customIcons/statutoryManagement.png";

function PayrollServices({ handleButtonClick }) {
  return (
    <Box my={10}>
      <Stack
        spacing={3}
        sx={{
          textAlign: "center",
          maxWidth: "600px",
          mx: { xs: 2, sm: "auto" },
          mb: 5,
        }}
      >
        <Stack spacing={1}>
          <Typography
            variant="body1"
            component="span"
            sx={{
              bgcolor: "#3E4756",
              color: "#FFFFFF",
              width: "fit-content",
              mx: "auto",
              px: 2,
              fontSize: "14px",
            }}
          >
            PAYROLL SERVICES
          </Typography>

          <Typography variant="h4" component="h1" sx={{ fontWeight: "1000" }}>
            WHAT WE DO FOR YOU
          </Typography>
        </Stack>

        <Typography variant="body1" color="#A0A0A0">
          Comp-rite Kenya Ltd does the following payroll services to help with
          your organizations payroll and accounting need.
        </Typography>
      </Stack>

      <Grid container sx={{ maxWidth: "1000px", mx: "auto" }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} key={`service-${service.id}`}>
            <ColoredBox {...service} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              p: 3,
              m: 2,
              bgcolor: "#DDA01E",
              minHeight: "250px",
              alignItems: "center",
              boxShadow: 2,

              "&:hover": {
                boxShadow: 4,
                opacity: 0.75,
              },
            }}
          >
            <Button
              variant="text"
              disableRipple
              sx={{
                p: 0,
                mx: "auto",
                width: "200px",
                height: "250px",
                color: "#FFFFFF",
                textAlign: "center",

                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
              onClick={handleButtonClick}
            >
              Enquire about our services
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
const DARKBLUE = "#3E4756";
const GRAY = "#F2F2F2";

const services = [
  {
    id: 1,
    bgColor: DARKBLUE,
    color: "#FFFFFF",
    image: FTP,
    imageAlt: "Server",
    title: "Online Cloud Backup",
    text: `Secure your data by backing it up online to our servers. 
    We carry out automatic backups that store your data at a different 
    location from the original therefore ensuring reliability, 
    easy retrieval and recovery. We also offer unlimited data retention 
    so your data will always be available.
    `,
  },
  {
    id: 2,
    bgColor: GRAY,
    color: DARKBLUE,
    image: Payroll,
    imageAlt: "Payroll",
    title: "Payroll Outsourcing",
    text: `Comp-rite Kenya allows you to delegate your payroll processing 
    to be done by our dedicated team. This ensures that Payroll processing 
    is done within your set time, with accuracy and up to date with backup 
    for the previous periods.`,
  },
  {
    id: 3,
    bgColor: DARKBLUE,
    color: "#FFFFFF",
    image: StatutoryManagement,
    imageAlt: "Management Icon",
    title: "Employee Statutory Management",
    text: `Do you work for an international organization or have taken up an 
    assignment in Kenya and employed any domestic workers? We offer Employee 
    Statutory Management where we keep you informed about payroll and any 
    statutory requirements that result from being an employer in Kenya. We 
    also manage your employees while handling any requirements that may 
    arise and provide periodic reports.`,
  },
];

export default PayrollServices;
