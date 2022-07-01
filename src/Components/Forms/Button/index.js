import React from "react";
import { ButtonForm } from "./styled";

const Button = ({ children, ...props }) => {
  return <ButtonForm {...props}>{children}</ButtonForm>;
};

export default Button;
