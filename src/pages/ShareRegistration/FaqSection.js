import React, { useState } from "react";
import { Container, Typography, Stack } from "@mui/material";

import { Faq } from "../../components";

function FaqSection(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container sx={{ p: 3 }}>
      <Stack spacing={1} sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Frequently asked questions
        </Typography>
        <Typography variant="body1" color="#A0A0A0">
          See some of our frequently asked questions
        </Typography>
      </Stack>
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
    question: "What is dividend?",
    answer: `A dividend is a share of profits and retained earnings that a company pays out to its
              shareholders. When a company generates a profit and accumulates retained earnings,
              those earnings can be either reinvested in the business or paid out to shareholders as
              a dividend. The annual dividend per share divided by the share price is the dividend yield.`,
  },
  {
    id: "panel2-header",
    contentId: "panel2-content",
    panelId: "panel2",
    question: "When does a company pay dividends?",
    answer: `If a company has excess earnings and decides to pay a dividend to common shareholders,
              then an amount is declared, in addition to the date when this amount will be paid out to
              the shareholders. Usually, both the date and the amount is determined on a quarterly
              basis, after a company finalizes its income statement and the board of directors meets
              to review the company's financials.`,
  },
  {
    id: "panel3-header",
    contentId: "panel3-content",
    panelId: "panel3",
    question: "What is my role as a shareholder?",
    answer: `The shareholders are the owners of the company and provide financial backing in return
              for potential dividends over the lifetime of the company. A person or corporation can
              become a shareholder of a company in three ways:By subscribing to the memorandum of the
              company during incorporation, By investing in return for new shares in the company,
              By obtaining shares from an existing shareholder by purchase, by gift or by will.
              Subscribers are usually the party who initiate the incorporation of a company and
              automatically become the first shareholders after incorporation. While it is possible
              for shareholders to transfer their shares, it is also possible for private companies to
              place restrictions on this process in the articles of the company.`,
  },
  {
    id: "panel4-header",
    contentId: "panel4-content",
    panelId: "panel4",
    question: "Who are Unclaimed Financial Assets Authority (UFAA)?",
    answer: `The Unclaimed Financial Assets Authority (UFAA) is an Authority created under the
              Unclaimed Financial Assets Act, No. 40 of 2011 to administer unclaimed financial
              assets. The primary mandate of the Authority is to receive unclaimed financial assets
              from the holders of such assets, safeguard and re-unite the assets with their rightful
              owners.`,
  },
  {
    id: "panel5-header",
    contentId: "panel5-content",
    panelId: "panel5",
    question: "Do I lose my money once it is turned over to the UFAA?",
    answer: `You do not lose any financial assets once remitted to UFAA. Indeed, UFAA on behalf of
              the Government exercise responsibility as holder of assets in the public interest and
              guarantee you an indefinite right of reunification. Beneficiary should constantly check
              for the status of deceased relatives.`,
  },
  {
    id: "panel6-header",
    contentId: "panel6-content",
    panelId: "panel6",
    question: "How do I keep track of my shares?",
    answer: `CDSC shall send you monthly statements if your account is active otherwise; you will
			receive your statement only once a year. However, if you would like to view/download/print
			your statements, you can visit the CDSC website at www.cdsckenya.com. You can also subscribe
			to the CDSC mobile services where you will receive an alert every time there is an activity
			in your accounts such as sale or purchase of shares for a minimum fee of Kshs.10.00 per alert.
			To subscribe, send the word ‘register’ to 22372 and follow the instructions.`,
  },
  {
    id: "panel7-header",
    contentId: "panel7-content",
    panelId: "panel7",
    question: "What is the CDSC?",
    answer: `CDS stands for the Central Depository System. This is a computer system operated by
			The Central Depository and Settlement Corporation (CDSC) that facilitates holdings of shares
			in electronic accounts, opened by shareholders and manages the process of transferring
			shares traded at the Stock Exchange.`,
  },
];

export default FaqSection;
