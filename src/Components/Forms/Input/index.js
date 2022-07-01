import React from "react";
import { InputForm, Error } from "./styled";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <InputForm>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </InputForm>
  );
};

export default Input;
