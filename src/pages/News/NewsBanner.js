import React from "react";

import { ReusableBanner } from "../../components";
import Background6 from "../../assets/background-6.png";

function NewsBanner(props) {
  return <ReusableBanner {...options} />;
}

const options = {
  image: Background6,
  imageAlt: "News",
  subtitle: "NEWS",
  title: "NEWS AND INFORMATION",
  text: `Discover the latest news, corporate announcements, notices and any
   other relevant information regarding our company and issuers`,
};

export default NewsBanner;
