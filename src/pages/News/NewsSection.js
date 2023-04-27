import React, { useState, useLayoutEffect } from "react";
import { Paper, Pagination, Grid } from "@mui/material";

import { NewsCard } from "../../components";
import { useData } from "../../hooks";

function NewsSection(props) {
  const { get } = useData();
  const [news, setNews] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    (async () => {
      let { data: pageData } = await get(`news?page=${page - 1}`);
      let { data, totalPages } = pageData;
      setNews(data);
      setPageCount(totalPages);
    })();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

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
        justifyContent={{ xs: "center", md: "left" }}
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
      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        sx={{ width: 'fit-content', my: 2, mx: {xs: 'auto', md: 2}}}
      />
    </Paper>
  );
}

export default NewsSection;
