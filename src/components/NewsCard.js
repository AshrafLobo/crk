import React from "react";
import dateformat from "dateformat";
import {
  Button,
  Box,
  Card,
  IconButton,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function NewsCard({
  news: { issuerId, issuerName, src, title, article, originalpostDate, originalSrc },
}) {
  const navigate = useNavigate();
  const date = new Date(originalpostDate);
  const mediumDate = dateformat(date, "mediumDate");
  const shortTime = dateformat(date, "shortTime");

  return (
    <Card
      sx={{
        textAlign: "left",
        maxWidth: "400px",
        p: 2,
        mx: "auto",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <IconButton
          size="large"
          color="inherit"
          disableRipple
          onClick={() => navigate(`/issuer/${issuerId}`)}
          sx={{ p: 0 }}
        >
          <img
            src={`${process.env.REACT_APP_API_URL}/${src}`}
            alt={`${issuerName} Logo Small`}
            aria-label={`${issuerName} Logo Small`}
            width="50px"
            height="50px"
            style={{ objectFit: "contain" }}
          />
        </IconButton>
        <Stack spacing={0} sx={{ textAlign: "right" }}>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontWeight: "400",
              fontSize: {
                xs: "10px",
                sm: "0.875rem",
                md: "10px",
                lg: "13px",
              },
              color: "#A0A0A0",
            }}
          >
            {mediumDate}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            sx={{
              fontWeight: "400",
              fontSize: {
                xs: "8px",
                sm: "10px",
                md: "8px",
                lg: "12px",
              },
              color: "#A0A0A0",
            }}
          >
            {shortTime}
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={0}>
        <Typography
          variant="body1"
          component="p"
          sx={{
            mt: 1,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            fontSize: { xs: "12px", sm: "1rem", md: "12px", lg: "1rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          onClick={() => navigate(`/issuer/${issuerId}`)}
          sx={{
            fontWeight: "400",
            fontSize: {
              xs: "10px",
              sm: "0.875rem",
              md: "10px",
              lg: "13px",
            },
            cursor: "pointer",
            color: "#A0A0A0",
            "&:hover": {
              color: "#DDA01E",
            },
          }}
        >
          {issuerName}
        </Typography>
      </Stack>

      <Divider light sx={{ my: 1 }} />

      <Box my={2}>
        <Typography
          variant="body2"
          component="p"
          sx={{
            fontWeight: "400",
            fontSize: {
              xs: "10px",
              sm: "0.875rem",
              md: "10px",
              lg: "13px",
            },
            color: "#A0A0A0",
            height: "75px",
            width: "calc(100%)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: { xs: 4, md: 5, lg: 4 },
            WebkitBoxOrient: "vertical",
          }}
        >
          {article}
        </Typography>
      </Box>

      <Button
        type="button"
        variant="contained"
        sx={{
          py: 2,
          px: { xs: 2, sm: 3, md: 2, lg: 3 },
          height: "30px",
          fontSize: { xs: "10px", sm: "12px", md: "10px", lg: "12px" },
          borderRadius: "50px",
          backgroundColor: "#DDA01E",
          "&:hover": {
            bgcolor: "#DDA01E",
            opacity: "0.9",
          },
        }}
        onClick={() => window.open(originalSrc, "_blank")}
      >
        View article
      </Button>
    </Card>
  );
}

export default NewsCard;
