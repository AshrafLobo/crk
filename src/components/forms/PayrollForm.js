import React from "react";
import { Grid, Stack, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

import FormikControl from "./form-controls/FormikControl";
import { useData, useSnackBar } from "../../hooks";

function PayrollForm(props) {
  const { post } = useData();
  const { displaySnackBar, setMessage } = useSnackBar();

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
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    company: "",
    jobTitle: "",
    noOfEmployees: "",
    enquireAbout: "",
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
    company: Yup.string(),
    jobTitle: Yup.string(),
    noOfEmployees: Yup.string(),
    enquireAbout: Yup.string().required("Please select an enquiry"),
    message: Yup.string().required("Please enter your message above"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const { data } = await post("payrollForms", values);
    resetForm();
    if (data && typeof data === "object") {
      setMessage("Message sent successfully");
    } else {
      setMessage("Message not sent. Somthing went wrong", "error");
    }
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
                  sx={{
                    width: "200px",
                    borderRadius: "50px",
                    fontSize: "12px",
                  }}
                >
                  Submit
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

export default PayrollForm;
