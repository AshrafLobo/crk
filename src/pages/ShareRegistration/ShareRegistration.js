import React from "react";

import {
  ClientSection,
  ShareRegistrationBanner,
  ShareRegistrationFeatures,
  ShareRegistrationFormSection,
} from "./";

function ShareRegistration(props) {
  return (
    <>
      <ShareRegistrationBanner />
      <ClientSection />
      <ShareRegistrationFeatures />
      <ShareRegistrationFormSection />
    </>
  );
}

export default ShareRegistration;
