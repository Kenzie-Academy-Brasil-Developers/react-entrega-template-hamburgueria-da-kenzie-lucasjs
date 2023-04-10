import React from "react";
import { ButtonStyles } from "./stylesButton";

const Button = ({ classN, onClick, text, children }) => (
  <ButtonStyles className={classN} onClick={onClick}>
    {text} {children}
  </ButtonStyles>
);

export default Button;

