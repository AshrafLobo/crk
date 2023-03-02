import React, { useLayoutEffect } from "react";

import { ContactUsBanner, ContactUsFormSection, MapsSection } from "./";

function ContactUs(props) {
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <ContactUsBanner />
      <ContactUsFormSection />
      <MapsSection />
    </>
  );
}

export default ContactUs;
