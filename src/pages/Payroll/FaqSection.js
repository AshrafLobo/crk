import React, { useState } from "react";
import { Container } from "@mui/material";

import { Faq } from "../../components";

function FaqSection(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container sx={{ p: 3 }}>
      {faqs.map((faq) => (
        <Faq
          key={faq.id}
          expanded={expanded}
          setExpanded={setExpanded}
          {...faq}
        />
      ))}
    </Container>
  );
}

const faqs = [
  {
    id: "panel1-header",
    contentId: "panel1-content",
    panelId: "panel1",
    question: "How much does Pay100 cost?",
    answer: "Pay100+ Costs Ksh 27,724 inclusive of VAT",
  },
  {
    id: "panel2-header",
    contentId: "panel2-content",
    panelId: "panel2",
    question: "What do I get for the price I pay?",
    answer: `The Price you pay includes; the Pay100+ Payroll Software, 
      installation, and the remaining part of the year of free call in support`,
  },
  {
    id: "panel3-header",
    contentId: "panel3-content",
    panelId: "panel3",
    question: "What is ALF?",
    answer: `ALF stand for Annual License Fee. This is a fee charged to the end 
      user on an annual basis to keep their license up to date as well as allow us 
      to continue to provide you with the best possible service.`,
  },
  {
    id: "panel4-header",
    contentId: "panel4-content",
    panelId: "panel4",
    question: "Is there a limit to the number of employees I can run?",
    answer: `Pay100+ has no limitation on the practical number of employees for 
      which it will process payroll. However, the number may be limited by your 
      processor speed, hard disk capacity etc. A typical computer with a Pentium 
      two processor could easily handle hundreds of thousands of employees.`,
  },
  {
    id: "panel5-header",
    contentId: "panel5-content",
    panelId: "panel5",
    question: "What Year End Reports does Pay100+ produce?",
    answer: `Pay100+ will print your P9, P9A and P10 and P10A year end reports. 
      It will also provide you with month end statutory reports such as the NSSF 
      and NHIF reports.`,
  },
];

export default FaqSection;
