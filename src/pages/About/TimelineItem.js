import React from "react";
import { Stack } from "@mui/system";
import { Avatar, Divider, Typography } from "@mui/material";
import dateformat from "dateformat";

function TimelineItem({ timeline: { id, title, timelineDate, description } }) {
  const date = new Date(timelineDate);
  const year = dateformat(date, "yyyy");
  
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

          <Typography variant="body1">
            {description}
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
          <Avatar sx={{ bgcolor: "#ffffff", color: "#3E4756" }}>{id}</Avatar>
        </Divider>
      </Stack>
    </>
  );
}

export default TimelineItem;
