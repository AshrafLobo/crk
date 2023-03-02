import React from "react";

import { ReusableBanner } from "../../components";
import Background2 from "../../assets/background-2.png";

function ShareRegistrationBanner({ handleButtonClick }) {
  const options = {
    image: Background2,
    imageAlt: "Share Registry Departement",
    subtitle: "SHARE REGISTRATION",
    title: "SHARE REGISTRATION SERVICES",
    text: `The Comp-rite Kenya Ltd share registration bureau has been in operation 
  for the last 30 years with an ever expanding client base. The share register 
  updates member records, replaces certificates, offers private transfer`,
    buttonText: "Enquire about share registration",
    handleButtonClick,
  };

  return <ReusableBanner {...options} />;
}

export default ShareRegistrationBanner;
