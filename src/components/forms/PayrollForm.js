import React from "react";
import { Grid, Stack, Button } from "@mui/material";
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormikControl
                control="input"
                type="text"
                label="First name"
                name="firstname"
              />
			</Grid>
			
			<Grid item xs={12} md={6}>
              <FormikControl
                control="input"
                type="text"
                label="Last name"
                name="lastname"
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
                label="Job title"
                name="jobTitle"
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
			
			<Grid item xs={12} md={6}>
              <FormikControl
                control="select"
                label="Enquire about"
                name="enquireAbout"
                options={enquireOptions}
              />
            </Grid>

			<Grid item xs={12} spacing={2}>
				<FormikControl control="textarea" label="Message" name="message" />
			</Grid>
			
            <Stack direction="row" justifyContent="flex-end" sx={{ m:2 }}>
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

export default PayrollForm;
