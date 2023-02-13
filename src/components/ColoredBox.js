import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function ColoredBox({ bgColor, color, image, imageAlt, title, text }) {
  return (
    <Box
      bgcolor={bgColor}
      color={color}
      p={3}
      m={2}
      sx={{ position: "relative", minHeight: "250px" }}
    >
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={image} alt={imageAlt} height="25px" />
          <Typography
            variant="h6"
            component="p"
            sx={{ fontSize: "16px", fontWeight: "bold" }}
          >
            {title}
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ fontSize: "12px" }}>
          {text}
        </Typography>
      </Stack>

      <Box
        sx={{
          bgcolor: color,
          position: "absolute",
          top: 15,
          right: 15,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          diplay: "inline",
        }}
      />
    </Box>
  );
}

export default ColoredBox;
