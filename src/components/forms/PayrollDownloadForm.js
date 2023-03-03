import React from "react";
import { Grid, Stack, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

import FormikControl from "./form-controls/FormikControl";
import { useData, useSnackBar } from "../../hooks";

function PayrollDownloadForm({ handleClose }) {
  const { get, post } = useData();
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
      setMessage("Message sent successfully. Your download will begin shortly");
    } else {
      setMessage("Message not sent. Somthing went wrong", "error");
    }
    setTimeout(() => {
      handleClose();
      window.open(
        `${process.env.REACT_APP_API_URL}/download/Setup.exe`,
        "_blank"
      );
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

              <Stack direction="row" justifyContent="flex-end" sx={{ m: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!formik.isValid}
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
