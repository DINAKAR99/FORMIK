import React from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("em ledh bro ida"),
    password: Yup.string().required("em ledh bro ida"),
  });
  const onSubmit = (val) => console.log(val);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              choice="input"
              name="email"
              type="email"
              id="email"
            />
            <FormikControl
              choice="input"
              name="password"
              type="password"
              id="password"
            />
            <button type="submit" disabled={!formik.isValid}>
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
