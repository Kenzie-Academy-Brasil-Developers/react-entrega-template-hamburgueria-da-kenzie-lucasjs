import React, { Component } from "react";
import logo from "../img/logo.svg"
import Input from "../Input";
import { HeaderStyles } from "./stylesHeader";

function Header({ handleSearch, inputValue, handleSubmit }) {
  return (
    <>
      <HeaderStyles>
        <section>
          <img src={logo} alt="Logo Burguer Kenzie" />
          <Input
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            handleSearch={handleSearch}
          />
        </section>
      </HeaderStyles>
    </>
  );
}

export default Header