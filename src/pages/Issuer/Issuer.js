import React, { useState, useLayoutEffect } from "react";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";

import { DescriptionSection, TabsSection } from "./";
import useData from "../../hooks/useData";

function Issuer(props) {
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  const { get } = useData();
  const params = useParams();
  const [issuer, setIssuer] = useState({});

  useLayoutEffect(() => {
    (async () => {
      if (params.id) {
        const { data } = await get(`issuers/${params.id}`);
        setIssuer(data[0]);
      }
    })();
  }, [issuer, params]);

  return (
    <Paper square sx={{ bgcolor: "#FAFAFA", p: { xs: 0, lg: 5 } }}>
      <DescriptionSection issuer={issuer} />
      <TabsSection />
    </Paper>
  );
}

export default Issuer;
