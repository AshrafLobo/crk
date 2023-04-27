import React, { useState } from "react";
import { Box, Tab, Paper } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { NewsSection, ShareholderSection } from "./";

function TabsSection(props) {
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      square
      elevation={0}
      sx={{ bgcolor: "background.paper", mb: 0, mt: 5, px: { xs: 3, lg: 5 } }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Issuer Tabs" centered>
            <Tab label="News" value="0" />
            <Tab label="Shareholder information" value="1" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <NewsSection />
        </TabPanel>
        <TabPanel value="1">
          <ShareholderSection />
        </TabPanel>
      </TabContext>
    </Paper>
  );
}

export default TabsSection;
