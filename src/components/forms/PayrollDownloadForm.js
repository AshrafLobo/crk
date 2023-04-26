import React, { useState } from "react";
import { Grid, Stack, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import ReCAPTCHA from "react-google-recaptcha";

import FormikControl from "./form-controls/FormikControl";
import { useData, useSnackBar } from "../../hooks";

function PayrollDownloadForm({ handleClose }) {
  const [verified, setVerified] = useState(false);
  const { post } = useData();
  const { displaySnackBar, setMessage } = useSnackBar();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    company: "",
    noOfEmployees: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email address "),
    phoneNo: Yup.string()
      .phone("KE", "Please enter a valid phone number")
      .required("A phone number is required"),
    company: Yup.string().required("Please enter a company name"),
    noOfEmployees: Yup.string().required(
      "Please enter the number of employees in the company"
    ),
  });

  const onSubmit = async (values, { resetForm }) => {
    const { data } = await post("payrollDownloadForms", values);
    resetForm();
    if (data && typeof data === "object") {
      window.open(
        `${process.env.REACT_APP_API_URL}/downloads/Setup.exe`,
        "_blank"
      );
      setMessage("Message sent successfully. Your download will begin shortly");
    } else {
      setMessage("Message not sent. Somthing went wrong", "error");
    }

    setTimeout(() => {
      handleClose();
    }, 6000);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormikControl
                  control="input"
                  type="text"
                  label="First name"
                  name="firstName"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Last name"
                  name="lastName"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Email"
                  name="email"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Phone number"
                  name="phoneNo"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Company"
                  name="company"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Number of employees"
                  name="noOfEmployees"
                />
              </Grid>

              <Grid item xs={12}>
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_API_RECAPTCHA_SITE_KEY}
                  onChange={() => setVerified(true)}
                />
              </Grid>

              <Stack direction="row" justifyContent="flex-end" sx={{ m: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!formik.isValid || !verified}
                  sx={{
                    width: "200px",
                    borderRadius: "50px",
                    fontSize: "12px",
                  }}
                >
                  Submit and download
                </Button>
              </Stack>
            </Grid>
          </Form>
        )}
      </Formik>
      {displaySnackBar}
    </>
  );
}

export default PayrollDownloadForm;
