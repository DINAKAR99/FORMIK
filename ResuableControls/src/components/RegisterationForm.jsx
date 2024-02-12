import React from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const RegisterationForm = () => {
  const initialValues = {
    email: "",
    password: "",
    passwordC: "",
    modeOfChoice: "",
    number: "",
  };

  const options = [
    {
      key: "by post",
      value: "post",
    },
    {
      key: "at center",
      value: "center",
    },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().required("em ledh bro ida"),
    password: Yup.string().required("em ledh bro ida"),
    passwordC: Yup.string()
      .oneOf([Yup.ref("password"), ""], "passes must match")
      .required("em ledh bro ida"),
    modeOfChoice: Yup.string().required("em ledh bro ida"),
    number: Yup.string().when("modeOfChoice", {
      is: "post",
      then: () => Yup.string().required("em ledh bro ida"),
    }),
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
            <FormikControl
              choice="input"
              name="passwordC"
              type="password"
              id="passwordC"
            />
            <FormikControl
              choice="radio"
              name="modeOfChoice"
              id="modeOfChoice"
              options={options}
            />
            <FormikControl
              choice="input"
              name="number"
              type="number"
              id="number"
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
