import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq({
  question,
  answer,
  id,
  contentId,
  panelId,
  expanded,
  setExpanded,
}) {
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === panelId}
      onChange={(event, isExpanded) => handleChange(isExpanded, panelId)}
    >
      <AccordionSummary
        style={{ background: "#3E4756", color: "#ffffff" }}
        expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
        id={id}
        aria-controls={contentId}
      >
        <Typography variant="body1">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 5 }}>
        <Typography variant="body2">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Faq;
