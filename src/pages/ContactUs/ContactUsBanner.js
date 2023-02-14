import React from "react";

import { ReusableBanner } from "../../components";
import Background5 from "../../assets/background-5.png";

function ContactUsBanner(props) {
  return <ReusableBanner {...options} />;
}

const options = {
  image: Background5,
  imageAlt: "Contact Us",
  subtitle: "CONTACT US",
  title: "CONTACT US",
  text: `Please fill in and Submit the form below. We do not sell, lease or share 
  your contact details with anyone else. The information we collect is solely used 
  internally to process your inquiry and to provide you with customer service.`,
};

export default ContactUsBanner;
