import React from "react";

import { ReusableBanner } from "../../components";
import Background3 from "../../assets/background-3.png";

function PayrollBanner(props) {
  return <ReusableBanner {...options} />;
}

const options = {
  image: Background3,
  imageAlt: "Payroll Departement",
  subtitle: "PAYROLL",
  title: "PAYROLL SERVICES",
  text: `Comp-rite Kenya Ltd has a range of payroll services 
  catered to small, medium and large companies that includes 
  accounting, book keeping and payroll outsourcing as well 
  as a dedicated team to provide technical support if needed.`,
  buttonText: "Enquire about payroll",
  handleButtonClick: () => {
    alert("CLICKED");
  },
};
export default PayrollBanner;
