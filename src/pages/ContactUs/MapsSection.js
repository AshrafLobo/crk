import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";

function MapsSection(props) {
  return (
    <Grid container sx={{ height: "600px" }}>
      <Grid item xs={12} md={6}>
        <MapContainer
          center={[-1.2500918195699124, 36.8208888268095]}
          zoom={13}
          scrollWheelZoom={false}
		  style={{ width: '100%', height: '100%'}}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-1.2500918195699124, 36.8208888268095]}>
            <Popup>
              <Typography variant='body2' sx={{ fontSize: '14px', p: 0, m: '0 !important' }}>Muthaiga Mini Market, Limuru road</Typography>
			  <Typography variant='body2' sx={{ fontSize: '14px', p: 0, m: '0 !important' }}>Nairobi, Kenya</Typography>
            </Popup>
          </Marker>
        </MapContainer>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: "#0F75BD",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={5} sx={{ p: { xs: 2, md: 5, lg: 10 } }}>
          <Typography
            variant="h4"
            component="h2"
            color="white"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            FIND US
          </Typography>

          <Grid container spacing={2} sx={{ color: "#ffffff" }}>
            <Grid item xs={12} sm={6}>
              <Stack>
                <Stack direction="row" alignItems="center">
                  <PlaceIcon />
                  <Typography
                    variant="h6"
                    mx={1}
                    sx={{
                      fontSize: { xs: "1.25rem", md: "18px", lg: "1.25rem" },
                    }}
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
            <Grid item xs={12} sm={6}>
              <Stack>
                <Stack direction="row" alignItems="center">
                  <PhoneIcon />
                  <Typography
                    variant="h6"
                    mx={1}
                    sx={{
                      fontSize: { xs: "1.25rem", md: "18px", lg: "1.25rem" },
                    }}
                  >
                    Contact us
                  </Typography>
                </Stack>
                <Typography variant="body1">
                  Email: info@comp-rite.com
                </Typography>
                <Typography variant="body1">
                  Telephone: +254-20-269-0955
                </Typography>
                <Typography variant="body1">Cell: +254 723-611786</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default MapsSection;
