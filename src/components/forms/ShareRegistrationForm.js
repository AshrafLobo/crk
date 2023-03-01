import React from "react";
import { Grid, Stack, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

import FormikControl from "./form-controls/FormikControl";

function ShareRegistrationForm(props) {
  const companyOptions = [
    { key: "Athi River Mining", value: "athi river mining" },
    { key: "Diamond Trust Bank Kenya", value: "diamond trust bank kenya" },
    {
      key: "Diamond Trust Bank Tanzania",
      value: "diamond trust bank tanzania",
    },
    { key: "Housing Finance Group", value: "housing finance group" },
    { key: "Total Kenya", value: "total kenya" },
    { key: "Other", value: "other" },
  ];

  const serviceOptions = [
    { key: "Account status", value: "account status" },
    { key: "Ammendement of details", value: "ammendement of details" },
    {
      key: "Dividend payment",
      value: "dividend payment",
    },
    { key: "General correspondence", value: "general correspondence" },
    { key: "Other", value: "other" },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
    idNumber: "",
    company: "",
    cdsNumber: "",
    service: "",
    message: "",
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
    address: Yup.string(),
    idNumber: Yup.string(),
    company: Yup.string().required("Please select a company"),
    cdscNumber: Yup.string(),
    service: Yup.string().required("Please select a service"),
    message: Yup.string().required("Please enter your message above"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
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
                label="Address"
                name="address"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormikControl
                control="input"
                type="text"
                label="ID Number"
                name="idNumber"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormikControl
                control="select"
                label="Pick a company"
                name="company"
                options={companyOptions}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormikControl
                control="input"
                type="text"
                label="CDSC/Certificate  Number"
                name="cdscNumber"
              />
            </Grid>

            <Grid item xs={12}>
              <FormikControl
                control="select"
                label="Please select a service you would like to enquire about"
                name="service"
                options={serviceOptions}
              />
            </Grid>

            <Grid item xs={12}>
              <FormikControl
                control="textarea"
                label="Message"
                name="message"
              />
            </Grid>

            <Stack direction="row" justifyContent="flex-end" sx={{ m: 2 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={!formik.isValid}
                sx={{ width: "200px", borderRadius: "50px", fontSize: "12px" }}
              >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ShareRegistrationForm;
