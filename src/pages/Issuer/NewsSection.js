import React, { useState, useLayoutEffect } from "react";
import { Box, Grid, Typography, Pagination } from "@mui/material";
import { useParams } from "react-router-dom";

import { NewsCard } from "../../components";
import { useData } from "../../hooks";

function NewsSection(props) {
  const params = useParams();
  const { get } = useData();
  const [news, setNews] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    (async () => {
      if (params.id) {
        let { data: pageData } = await get(
          `issuers/news/${params.id}?page=${page - 1}`
        );
        let { data, totalPages } = pageData;
        if (data && Array.isArray(data) && data.length > 0) {
          setNews(data);
          setPageCount(totalPages);
        } else {
          setNews([]);
        }
      }
    })();
  }, [page, params]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const newsJsx =
    news && news.length > 0 ? (
      <Box sx={{ m: 0, p: 0 }}>
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
          sx={{ width: 'fit-content', my: 2, mx: {xs: 'auto', md: 2} }}
        />
      </Box>
    ) : (
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        NO NEWS AND INFORMATION YET
      </Typography>
    );
  return <>{newsJsx}</>;
}

export default NewsSection;
