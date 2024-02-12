import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
function FormikContainer() {
  const initialValues = {
    email: "",
    desc: "",
    country: "",
    radioButton: "",
    checkboxoptions: [],
    datepick: null,
  };

  const optionlist = [
    { key: "plz select", value: "" },
    { key: "india", value: "i" },
    { key: "america", value: "a" },
    { key: "africa", value: "af" },
  ];
  const RadioOptionlist = [
    { key: "india", value: "i" },
    { key: "america", value: "a" },
    { key: "africa", value: "af" },
  ];
  const CheckOptionlist = [
    { key: "india", value: "i" },
    { key: "america", value: "a" },
    { key: "africa", value: "af" },
  ];
  const validationSchema = Yup.object({
    email: Yup.string().required("kali undi bro.."),
    desc: Yup.string().required("kali undi bro.."),
    country: Yup.string().required("kali undi bro.."),
    radioButton: Yup.string().required("kali undi bro.."),
    checkboxoptions: Yup.array().required("kali undi bro.."),
    datepick: Yup.date().required("kali undi bro..").nullable(),
  });
  const onSubmit = (val) => console.log("form data", val);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(form) => (
        <Form>
          <FormikControl
            choice="input"
            type="email"
            name="email"
            label="email"
          />
          <FormikControl choice="textarea" name="desc" label="desc" />
          <FormikControl
            choice="select"
            name="country"
            label="select a country"
            options={optionlist}
          />
          <FormikControl
            choice="radio"
            name="radioButton"
            label="select a radio option"
            options={RadioOptionlist}
          />
          <FormikControl
            choice="checkbox"
            name="checkboxoptions"
            label="multi options"
            options={RadioOptionlist}
          />
          <FormikControl choice="date" name="datepick" label="choose date " />
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
