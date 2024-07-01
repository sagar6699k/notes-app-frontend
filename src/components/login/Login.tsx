import React from "react";
import { Formik, FormikValues, FormikProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

interface FormValues {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
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
              width="90%"
              display="flex"
              flexDirection="column"
              m="auto"
              sx={{ p: 2, borderRadius: "1rem" }}
              bgcolor="#FFFFFF"
            >
              <TextField
                id="email"
                label="Enter your email"
                variant="standard"
                value={values.email}
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email ? errors.email : ""}
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
                sx={{
                  marginBottom: "1.5rem",
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              />

              <Box display="flex" alignItems="center">
                <Checkbox inputProps={{ "aria-label": "controlled" }} />
                <Typography
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.8rem" },
                  }}
                >
                  Remember me
                </Typography>
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
                Login
              </Button>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
