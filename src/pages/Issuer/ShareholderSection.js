import React from "react";
import { Stack } from "@mui/material";

import { DividendsTable, AgmsTable, EgmsTable } from "./";

function ShareholderSection(props) {
  return (
    <Stack spacing={5}>
      <DividendsTable />
      <AgmsTable />
      <EgmsTable />
    </Stack>
  );
}

export default ShareholderSection;
