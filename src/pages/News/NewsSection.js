import React, { useState, useLayoutEffect } from "react";
import { Paper, Grid } from "@mui/material";

import { NewsCard } from "../../components";
import { useData } from "../../hooks";

function NewsSection(props) {
  const { get } = useData();
  const [news, setNews] = useState([]);

  useLayoutEffect(() => {
    (async () => {
      let { data } = await get("news");
	  const sortedData = data.sort(
        (a, b) => new Date(b.originalpostDate) - new Date(a.originalpostDate)
      );
      setNews(sortedData);
    })();
  }, []);

  return (
    <Paper
      square
      elevation={0}
      sx={{
        mx: 0,
        mt: 5,
        p: { xs: 2, sm: 3, md: 5, lg: 10 },
        textAlign: "center",
        bgcolor: "#FAFAFA",
        position: "relative",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          width: "100%",
          m: 0,
        }}
      >
        {news &&
          news.map((item) => (
            <Grid item xs={12} md={4} key={`issuer-${item.id}`}>
              <NewsCard news={item} />
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
}

export default NewsSection;
