import React from "react";
import { useNavigate } from "react-router-dom";
import ReusableBanner from "../../components/ReusableBanner";
import Background1 from "../../assets/background-1.png";

function AboutBanner(props) {
  const navigate = useNavigate();

  const options = {
    image: Background1,
    imageAlt: "Comp-rite Office",
    subtitle: "ABOUT US",
    title: "WHO WE ARE",
    text: `Comp-rite Kenya Ltd is a locally owned and operated company that has
  been in existence since 1972. Our core strengths have always been
  technology-focused, and over the years, Comp-rite remains at the
  forefront of providing customized software and technology-based
  solutions to a diverse range of corporations in Kenya.`,
    buttonText: "Contact us",
    handleButtonClick: function handleClick() {
      navigate("/contact_us");
    },
  };

  return <ReusableBanner {...options} />;
}

export default AboutBanner;
