import React from "react";

import {
  PayrollBanner,
  PayrollServices,
  Pay100Banner,
  PayrollFeatures,
  PayrollFormSection,
} from "./";

function Payroll(props) {
  return (
    <>
      <PayrollBanner />
      <PayrollServices />
      <Pay100Banner />
      <PayrollFeatures />
      <PayrollFormSection />
    </>
  );
}

export default Payroll;
