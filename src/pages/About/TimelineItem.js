import React from "react";
import { Stack } from "@mui/system";
import { Avatar, Divider, Typography } from "@mui/material";

function TimelineItem({ timeline: { index, year, title, timelineText } }) {
  return (
    <>
      <Stack spacing={3}>
        <Stack
          spacing={3}
          sx={{
            height: "250px",
            maxWidth: { xs: "300px", sm: "200px", md: "250px", lg: "200px" },
            mx: "auto",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <Stack spacing={0}>
            <Typography
              sx={{
                fontSize: "12px",
                bgcolor: "#3E4756",
                width: "fit-content",
                mx: "auto",
                px: 1,
              }}
            >
              {year}
            </Typography>
            <Typography variant="h6" component="p" sx={{ fontWeight: "800" }}>
              {title}
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ color: "" }}>
            {timelineText}
          </Typography>
        </Stack>
        <Divider
          variant="middle"
          sx={{
            "&::before, &::after": {
              borderColor: "#CFCFCF",
            },
          }}
        >
          <Avatar sx={{ bgcolor: "#ffffff", color: "#3E4756" }}>{index}</Avatar>
        </Divider>
      </Stack>
    </>
  );
}

export default TimelineItem;
