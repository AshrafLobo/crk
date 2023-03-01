import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Stack, Typography } from "@mui/material";

function IssuerCard({ issuer: { id, src, name, title } }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        textAlign: "center",
        maxWidth: "400px",
        p: 2,
        mx: "auto",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <img
        src={`${process.env.REACT_APP_API_URL}/${src}`}
        alt={`${name} Logo`}
        aria-label={`${name} Logo`}
        width="85%"
        height="150px"
        style={{ objectFit: "contain" }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Stack spacing={0} sx={{ textAlign: "left" }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "12px", sm: "14px", md: "12px", lg: "14px" },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "400",
              fontSize: {
                xs: "10px",
                sm: "0.875rem",
                md: "10px",
                lg: "12px",
              },
              color: "#A0A0A0",
            }}
          >
            {title}
          </Typography>
        </Stack>

        <Button
          type="button"
          variant="contained"
          sx={{
            py: 2,
            px: { xs: 1, sm: 3, md: 1, lg: 3 },
            height: "30px",
            fontSize: { xs: "10px", sm: "12px", md: "10px", lg: "12px" },
            borderRadius: "50px",
            backgroundColor: "#DDA01E",
            "&:hover": {
              bgcolor: "#DDA01E",
              opacity: "0.9",
            },
          }}
          onClick={() => navigate(`/issuer/${id}`)}
        >
          View profile
        </Button>
      </Stack>
    </Card>
  );
}

export default IssuerCard;
