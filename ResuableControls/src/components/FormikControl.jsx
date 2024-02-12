import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import RadioButton from "./RadioButton";
import CheckBox from "./CheckBox";
import Datepick from "./Datepick";

function FormikControl(props) {
  const { choice, ...rest } = props;
  switch (choice) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <Datepick {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
