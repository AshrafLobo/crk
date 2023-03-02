import React, { useLayoutEffect } from "react";

import { AboutBanner, ServicesSection, TimelineSection } from "./";

function About(props) {
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <AboutBanner />
      <ServicesSection />
      <TimelineSection />
    </>
  );
}

export default About;
