import React from "react";

import { ContactUsBanner, ContactUsFormSection, GoogleMapsSection } from "./";

function ContactUs(props) {
  return (
    <>
      <ContactUsBanner />
      <ContactUsFormSection />
      <GoogleMapsSection />
    </>
  );
}

export default ContactUs;
