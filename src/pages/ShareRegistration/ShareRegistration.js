import React, { useLayoutEffect, useRef } from "react";

import {
  ClientSection,
  ShareRegistrationBanner,
  ShareRegistrationFeatures,
  ShareRegistrationFormSection,
} from "./";

function ShareRegistration(props) {
  const formRef = useRef(null);
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  const handleButtonClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ShareRegistrationBanner handleButtonClick={handleButtonClick} />
      <ClientSection />
      <ShareRegistrationFeatures />
      <ShareRegistrationFormSection ref={formRef} />
    </>
  );
}

export default ShareRegistration;
