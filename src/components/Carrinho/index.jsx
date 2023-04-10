import React from "react";
import { Carrinhostyle } from "./Carrinhostyle";



const CarrinhoCard = ({ product, children }) => {
  const { id, img, name, category } = product;
  return (
    <Carrinhostyle key={id}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
      </div>
      {children}
    </Carrinhostyle>
  );
};

export default CarrinhoCard