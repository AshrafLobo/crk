import React from "react";
import { Grid, Stack, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

import FormikControl from "./form-controls/FormikControl";
import { useData, useSnackBar } from "../../hooks";

function ContactUsForm(props) {
  const { post } = useData();
  const { displaySnackBar, setMessage } = useSnackBar();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    subject: "",
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
    subject: Yup.string().required("Please enter a subject"),
    message: Yup.string().required("Please enter your message above"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const { data } = await post("contactUsForms", values);
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

              <Grid item xs={12}>
                <FormikControl
                  control="input"
                  type="text"
                  label="Subject"
                  name="subject"
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

export default ContactUsForm;
