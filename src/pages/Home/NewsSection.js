import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom';

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { NewsCard } from "../../components";
import useData from "../../hooks/useData";

function NewsSection(props) {
  const [get] = useData();
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      let { data } = await get("news");
      const sortedData = data.sort(
        (a, b) => new Date(b.dateUpdated) - new Date(a.dateUpdated)
      );
      setNews(sortedData.slice(0, 3));
    })();
  }, []);

  return (
    <Paper
      sx={{
        textAlign: "center",
        py: 10,
        px: { sm: 3, lg: 10 },
        bgcolor: "#FEFEFE",
        position: "relative",
        borderRadius: 0,
      }}
    >
      <Stack spacing={5}>
        <Stack spacing={0}>
          <Typography
            variant="body1"
            component="span"
            sx={{
              bgcolor: "#3E4756",
              color: "#ffffff",
              width: "fit-content",
              px: 2,
              mx: "auto",
              mb: 1,
              fontSize: "14px",
            }}
          >
            NEWS
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mx: 2 }}
          >
            News and information
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: "#A0A0A0", mx: 2 }}
          >
            See the latest news and information from our clients
          </Typography>
        </Stack>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            width: "100%",
            paddingRight: 2,
          }}
        >
          {news &&
            news.map((item) => (
              <Grid item xs={12} md={4} key={`issuer-${item.id}`}>
                <NewsCard news={item} />
              </Grid>
            ))}
        </Grid>

        <Button
          type="button"
          variant="contained"
          endIcon={<ArrowRightIcon />}
          sx={{
            width: "200px",
            alignSelf: "center",
            mx: { xs: "auto !important", md: "0 !important" },
            py: 1,
            lineHeight: "0",
            borderRadius: "50px",
            backgroundColor: "#DDA01E",
            "&:hover": {
              bgcolor: "#DDA01E",
              opacity: "0.9",
            },
          }}
		  onClick={() => navigate('news')}
        >
          See more
        </Button>
      </Stack>
    </Paper>
  );
}

export default NewsSection;
