import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function RadioButton(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((i) => (
            <React.Fragment key={i.key}>
              <input
                type="radio"
                id={i.value}
                {...field}
                value={i.value}
                checked={field.value === i.value}
              />
              <label htmlFor={i.value}>{i.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButton;
