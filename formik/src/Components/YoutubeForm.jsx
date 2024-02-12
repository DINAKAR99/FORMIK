  import React, { useState } from "react";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FieldArray,
  FastField,
} from "formik";
import * as yup from "yup";
import { TextError } from "./TextError";
const initialValues = {
  name: "tony",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    twitter: "",
    facebook: "",
  },
  phoneNumber: ["", ""],
  phnums: [""],
};

const savedValues = {
  name: "tony11",
  email: "ss@g.com",
  channel: "ww",
  comments: "dd",
  address: "dd",
  social: {
    twitter: "dd",
    facebook: "ss",
  },
  phoneNumber: ["we", "wd"],
  phnums: ["33"],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("form data", values);
  console.log("submt porps", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "required";
//   }
//   if (!values.email) {
//     errors.email = "required";
//   }
//   if (!values.channel) {
//     errors.channel = "required";
//   }

//   return errors;
// };

const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().required("required"),
  channel: yup.string().required("required"),
  // comments: yup.string().required("required"),
});

const ValidateComments = (value) => {
  let error;
  if (!value) {
    error = "req";
  }
  return error;
};
export const YoutubeForm = () => {
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema,
  //   });

  //   console.log("touched fields", formik.touched);
  const [val, setVal] = useState(null);
  return (
    <Formik
      initialValues={val || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnMount
    >
      {(formik) => {
        console.log("formik props", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">name</label>
              <Field
                type="text"
                id="name"
                name="name"
                // onChange={formik.handleChange}
                // value={formik.values.name}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("name")}
              />
              {/* {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null} */}
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="email">email</label>
              <Field
                type="text"
                id="email"
                name="email"
                className="error"
                // onChange={formik.handleChange}
                // value={formik.values.email}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("email")}
              />
              {/* {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null} */}
              <ErrorMessage name="email">
                {(errmsg) => <div className="error">{errmsg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                // onChange={formik.handleChange}
                // value={formik.values.channel}
                // onBlur={formik.handleBlur}
                // {...formik.getFieldProps("channel")}
              />
              {/* {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null} */}
              <ErrorMessage name="channel" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="comments">comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={ValidateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">address</label>
              <FastField name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  console.log("field render");
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">facebook</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">twitter</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="ph-1">ph-1</label>
              <Field type="text" id="ph-1" name="phoneNumber[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="ph-2">ph-2</label>
              <Field type="text" id="ph-2" name="phoneNumber[1]" />
            </div>

            <div className="form-control">
              <label>list of phone numbers</label>
              <FieldArray name="phnums">
                {(props) => {
                  const { push, remove, form } = props;
                  const { values } = form;
                  const { phnums } = values;
                  // console.log("form errrors", form.errors);
                  return (
                    <div>
                      {phnums.map((i, index) => (
                        <div key={index}>
                          <Field name={`phnums[${index}]`} />
                          <button onClick={() => push()}>+</button>
                          <button onClick={() => remove(index)}>-</button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              validate all
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              touch comments
            </button>
            <button type="button" onClick={() => setVal(savedValues)}>
              load
            </button>
            {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)}> */}
            <button type="submit" disabled={formik.isSubmitting}>
              submit
            </button>
            <button type="reset">reset</button>
          </Form>
        );
      }}
    </Formik>
  );
};
