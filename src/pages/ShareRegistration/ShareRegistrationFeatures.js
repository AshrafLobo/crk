import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

import AGM from "../../assets/customIcons/agm.png";
import DataSecurity from "../../assets/customIcons/data-security.png";
import DividendProcessing from "../../assets/customIcons/dividend-processing.png";
import Mailing from "../../assets/customIcons/mailing-room.png";
import ShareMaintainance from "../../assets/customIcons/share-maintainance.png";
import Software from "../../assets/customIcons/software.png";
import { ColoredBox } from "../../components";

function ShareRegistrationFeatures(props) {
  return (
    <Grid container sx={{ my: 10 }}>
        <Stack
          spacing={1}
          sx={{
			maxWidth: '1000px',
            textAlign: "center",
            mx: 'auto',
			mb: 5
          }}
        >
          <Typography
            variant="body1"
            component="span"
            sx={{
              bgcolor: "#3E4756",
              color: "#FFFFFF",
              width: "fit-content",
              mx: 'auto',
              px: 2,
              fontSize: "14px",
            }}
          >
            SHARE REGISTRATION SERVICES
          </Typography>

          <Typography variant="h4" component="h1" sx={{ fontWeight: "1000" }}>
            WHAT WE DO FOR YOU
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{ maxWidth: '600px', color: "#A0A0A0", p: 0 }}
          >
            Comp-rite Kenya Ltd handles the following share registration
            services on behalf of our issuers. Please fill in the contact form
            below to enquire about any of these services.
          </Typography>
        </Stack>

        <Grid container sx={{ maxWidth: "1000px", mx: 'auto' }}>
          {features.map((feature) => (
            <Grid item xs={12} sm={4} key={`feature-${feature.id}`}>
              <ColoredBox {...feature} />
            </Grid>
          ))}
        </Grid>
    </Grid>
  );
}

const DARKBLUE = "#3E4756";
const GRAY = "#F2F2F2";

const features = [
  {
    id: 1,
    bgColor: DARKBLUE,
    color: "#FFFFFF",
    image: DividendProcessing,
    imageAlt: "Dividend Processing",
    title: "Dividend Processing",
    text: `We perform a variety of tasks to ensure dividend is allocated correctly
     including dividend calculation, printing of dividend cheques, processing of 
     dividend EFT's and replacement of old/stale cheques.`,
  },
  {
    id: 2,
    bgColor: GRAY,
    color: DARKBLUE,
    image: ShareMaintainance,
    imageAlt: "Share Registry Maintainance",
    title: "Share Registry Maintainance",
    text: `We manage record and distribute information regarding shares to shareholders
     as well as issuers.`,
  },
  {
    id: 3,
    bgColor: DARKBLUE,
    color: "#FFFFFF",
    image: Mailing,
    imageAlt: "Mailing Room Services",
    title: "Mailing Room Services",
    text: `We perform collating, insertion and labelling of Annual Reports as well as
     returned mail management including indexing and filing returned dividend cheques 
     etc.`,
  },
  {
    id: 4,
    bgColor: GRAY,
    color: DARKBLUE,
    image: AGM,
    imageAlt: "AGM Management",
    title: "AGM Management",
    text: `Comp-rite workd with our issuers by collating and handling the registration
     of shareholders and proxies, conducting polls and reporting on shareholder and
     proxy attendance.`,
  },
  {
    id: 5,
    bgColor: DARKBLUE,
    color: "#FFFFFF",
    image: DataSecurity,
    imageAlt: "Data Security",
    title: "Data Security",
    text: `The data handled within our organization is securely held in both a dedicated 
     server and a cloud database with daily backups of both databases.`,
  },
  {
    id: 6,
    bgColor: GRAY,
    color: DARKBLUE,
    image: Software,
    imageAlt: "IShare Pro",
    title: "IShare Pro",
    text: `Our trend setting proprietary software was designed from the ground up, in 
     consideration with the CDSC IT vendors and has been specifically written to integrate 
     fully with the CDSC environment.`,
  },
];

export default ShareRegistrationFeatures;
