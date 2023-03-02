import React, { useState, useLayoutEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { NewsCard } from "../../components";
import { useData } from "../../hooks";

function NewsSection(props) {
  const params = useParams();
  const { get } = useData();
  const [news, setNews] = useState([]);

  useLayoutEffect(() => {
    (async () => {
      if (params.id) {
        let { data } = await get(`issuers/news/${params.id}`);

        if (data && Array.isArray(data) && data.length > 0) {
          setNews(data);
        } else {
          setNews([]);
        }
      }
    })();
  }, [params]);

  const newsJsx =
    news && news.length > 0 ? (
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
    ) : (
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        NO NEWS AND INFORMATION YET
      </Typography>
    );
  return <>{newsJsx}</>;
}

export default NewsSection;
