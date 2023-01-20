import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Timeline } from "./";

function TimelineSection(props) {
  return (
    <Box bgcolor="#0F75BD" py={5}>
      <Stack
        spacing={3}
        sx={{
          textAlign: "center",
          maxWidth: "600px",
          mx: { xs: 2, sm: "auto" },
        }}
      >
        <Stack spacing={1}>
          <Typography
            variant="body1"
            component="span"
            sx={{
              bgcolor: "#3E4756",
              color: "#ffffff",
              width: "fit-content",
              mx: "auto",
              px: 2,
              fontSize: "14px",
            }}
          >
            TIMELINE
          </Typography>

          <Typography
            variant="h4"
            component="h1"
            color="white"
            sx={{ fontWeight: "bold" }}
          >
            OUR HISTORY
          </Typography>
        </Stack>

        <Typography variant="body1" color="white">
          Want to learn more about us? Take a look at our timeline. It begins
          from when we started doing business in 1972 and lists the achievements
          we are most proud of.
        </Typography>
      </Stack>

      <Stack
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          my: 10,
          px: { xs: 2, sm: 5 },
          position: "relative",
        }}
      >
        <Timeline />
      </Stack>
    </Box>
  );
}

export default TimelineSection;
