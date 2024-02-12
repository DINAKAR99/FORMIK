import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  name: "tony",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  }
  if (!values.channel) {
    errors.channel = "required";
  }

  return errors;
};

const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().required("required"),
  channel: yup.string().required("required"),
});
export const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("touched fields", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="error"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">submi</button>
      </form>
    </div>
  );
};
