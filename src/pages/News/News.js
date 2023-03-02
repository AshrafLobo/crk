import React, { useLayoutEffect } from "react";
import { NewsBanner, NewsSection } from "./";

function News(props) {
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <NewsBanner />
      <NewsSection />
    </>
  );
}

export default News;
