import React from "react";
import { Stack, Button } from "@mui/material";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import "yup-phone-lite";

import FormikControl from "./form-controls/FormikControl";

function PayrollForm(props) {
  const enquireOptions = [
    { key: "Pay 100 Plus", value: "pay 100 plus" },
    { key: "Payroll submission", value: "payroll submission" },
    {
      key: "Payroll outsourcing services",
      value: "payroll outsourcing services",
    },
    { key: "Cloud backup", value: "cloud backup" },
    { key: "Other", value: "other" },
  ];

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    company: "",
    jobTitle: "",
    noOfEmployees: "",
    enquireAbout: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Please enter your first name"),
    lastname: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email address "),
    phoneNo: Yup.string()
      .phone("KE", "Please enter a valid phone number")
      .required("A phone number is required"),
    company: Yup.string(),
    jobTitle: Yup.string(),
    noOfEmployees: Yup.string(),
    enquireAbout: Yup.string().required("Please select an enquiry"),
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
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <FormikControl
                control="input"
                type="text"
                label="First name"
                name="firstname"
              />
              <FormikControl
                control="input"
                type="text"
                label="Last name"
                name="lastname"
              />
            </Stack>

            <Stack direction="row" spacing={2}>
              <FormikControl
                control="input"
                type="text"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="text"
                label="Phone number"
                name="phoneNo"
              />
            </Stack>

            <Stack direction="row" spacing={2}>
              <FormikControl
                control="input"
                type="text"
                label="Company"
                name="company"
              />
              <FormikControl
                control="input"
                type="text"
                label="Job title"
                name="jobTitle"
              />
            </Stack>

            <Stack direction="row" spacing={2}>
              <FormikControl
                control="input"
                type="text"
                label="Number of employees"
                name="noOfEmployees"
              />
              <FormikControl
                control="select"
                label="Enquire about"
                name="enquireAbout"
                options={enquireOptions}
              />
            </Stack>

            <FormikControl control="textarea" label="Message" name="message" />
            <Stack direction="row" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                disabled={!formik.isValid}
                sx={{ width: "200px", borderRadius: "50px", fontSize: "12px" }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default PayrollForm;
