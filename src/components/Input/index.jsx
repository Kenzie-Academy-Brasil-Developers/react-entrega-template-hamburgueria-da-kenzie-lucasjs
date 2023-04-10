import React from "react";
import Button from "../Button";
import { InputStyles } from "./Inputstyles";

const Input = ({ handleSearch, inputValue, handleSubmit }) => {
  return (
    <InputStyles>
      <input
        value={inputValue}
        onChange={handleSearch}
        maxLength="20"
        type="text"
        placeholder="Digite sua pesquisa"
      />
      <Button onClick={handleSubmit} text="Pesquisar" />
    </InputStyles>
  );
};

export default Input;


