import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, type, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{type}</label>
      <Field type={type} name={name} id={name} {...rest}></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
