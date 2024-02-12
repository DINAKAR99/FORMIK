import React from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const CourseEnroll = () => {
  const initialValues = {
    email: "",
    bio: "",
    couses: "",
    skill: [],
    date: "",
  };

  const optionss = [
    { key: "mpc", value: "mpc" },
    { key: "bipc", value: "bipc" },
  ];
  const options2 = [
    { key: "html", value: "html" },
    { key: "css", value: "css" },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid format").required("em ledh bro ida"),
    bio: Yup.string().required("em ledh bro ida"),
    couses: Yup.string().required("em ledh bro ida"),
    skill: Yup.array().required("em ledh bro ida"),
    date: Yup.date().required("kali undi bro..").nullable(),
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
              label="email"
            />
            <FormikControl choice="textarea" name="bio" id="bio" label="bio" />
            <FormikControl
              choice="select"
              name="couses"
              id="couses"
              options={optionss}
              label="corses"
            />
            <FormikControl
              choice="checkbox"
              name="skill"
              id="skill"
              options={options2}
              label="skills"
            />
            <FormikControl
              choice="date"
              name="corsedate"
              id="corsedate"
              label="date"
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
