import React, { useLayoutEffect, useRef, useState } from "react";

import {
  PayrollBanner,
  PayrollServices,
  Pay100Banner,
  PayrollFeatures,
  PayrollDownloadModal,
  PayrollFormSection,
} from "./";

function Payroll(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formRef = useRef(null);
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  const handleButtonClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PayrollBanner handleButtonClick={handleButtonClick} />
      <PayrollServices handleButtonClick={handleButtonClick} />
      <Pay100Banner handleOpen={handleOpen} />
      <PayrollFeatures handleOpen={handleOpen} />
      <PayrollFormSection ref={formRef} />
      <PayrollDownloadModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Payroll;
