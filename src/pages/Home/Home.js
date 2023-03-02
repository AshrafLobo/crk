import React, { useLayoutEffect } from "react";

import { ContactusBanner } from "../../components";
import { Banner, ClientSection, NewsSection } from "./";

function Home(props) {
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Banner />
      <ClientSection />
      <ContactusBanner />
      <NewsSection />
    </>
  );
}

export default Home;
