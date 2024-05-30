import React from "react";
import {
  Formik,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const LoginPage: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
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
    <div className="main">
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name:
              <Field
                name="name"
                type="text"
                className={errors.name ? "error" : ""}
              />
              <ErrorMessage className="error" name="name" component="div" />
            </label>
            <label htmlFor="email">
              Email:
              <Field
                name="email"
                type="email"
                className={errors.email ? "error" : ""}
              />
              <ErrorMessage className="error" name="email" component="div" />
            </label>

            <label htmlFor="password">
              Password:
              <Field
                name="password"
                type="password"
                className={errors.password ? "error" : ""}
              />
              <ErrorMessage className="error" name="password" component="div" />
            </label>

            <label htmlFor="confirmPassword">
              Confirm Password:
              <Field
                name="confirmPassword"
                type="password"
                className={errors.confirmPassword ? "error" : ""}
              />
              <ErrorMessage
                className="error"
                name="confirmPassword"
                component="div"
              />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
