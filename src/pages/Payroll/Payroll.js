import React, { useLayoutEffect, useRef } from "react";

import {
  PayrollBanner,
  PayrollServices,
  Pay100Banner,
  PayrollFeatures,
  PayrollFormSection,
} from "./";

function Payroll(props) {
  const formRef = useRef(null);
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  const handleButtonClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PayrollBanner handleButtonClick={handleButtonClick} />
      <PayrollServices handleButtonClick={handleButtonClick} />
      <Pay100Banner />
      <PayrollFeatures />
      <PayrollFormSection ref={formRef} />
    </>
  );
}

export default Payroll;
