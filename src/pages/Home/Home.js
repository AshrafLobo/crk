import React from "react";

import { ContactusBanner } from "../../components";
import { Banner, ClientSection, NewsSection } from "./";

function Home(props) {
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
