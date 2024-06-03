import React from "react";
import { Formik, FormikValues, FormikProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

interface FormValues {
  Fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const Signup: React.FC = () => {
  const initialValues: FormValues = {
    Fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    Fullname: Yup.string().required("Fullname is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<FormValues>) => {
          const {
            handleChange,
            handleSubmit,
            handleBlur,
            handleReset,
            values,
            errors,
            isSubmitting,
            touched,
          } = props;

          return (
            <Box
              component="form"
              onSubmit={handleSubmit}
              onReset={handleReset}
              width="100%"
              display="flex"
              flexDirection="column"
              m="auto"
              sx={{ p: 2, borderRadius: "1rem" }}
            >
              <TextField
                id="Fullname"
                label="Enter your fullname"
                variant="standard"
                value={values.Fullname}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.Fullname && touched.Fullname ? errors.Fullname : ""
                }
                // error={errors.Fullname && touched.Fullname ? true : false}
                sx={{
                  marginBottom: "1.5rem",
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              />
              <TextField
                id="email"
                label="Enter your email"
                variant="standard"
                value={values.email}
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email ? errors.email : ""}
                // error={errors.email && touched.email ? true : false}

                sx={{
                  marginBottom: "1.5rem",
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              />
              <TextField
                id="password"
                label="Enter your password"
                variant="standard"
                value={values.password}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.password && touched.password ? errors.password : ""
                }
                // error={errors.password && touched.password ? true : false}
                sx={{
                  marginBottom: "1.5rem",
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              />
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="standard"
                value={values.confirmPassword}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : ""
                }
                sx={{
                  marginBottom: "1.5rem",
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              />

              <Box display="flex" alignItems="center">
                <Checkbox
                  // checked={checked}
                  // onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography fontSize="small">I agree to <span style={{color:"#068cfa"}}>terms and conditions</span></Typography>
              </Box>

              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                sx={{
                  marginTop: "1.5rem",
                  background:
                    "linear-gradient(200deg, #031739 0%, rgba(38, 130, 148, 0.88) 50%, #133d4c 97%)",
                }}
              >
                Signup
              </Button>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default Signup;
