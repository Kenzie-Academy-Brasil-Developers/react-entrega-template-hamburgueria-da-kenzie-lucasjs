import React from "react";
import { ProdutosStyles } from "./ProdutosStyles";

export default function ProdutosDalista({ children, product }) {
  return (
    <ProdutosStyles key={product.id}>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div>
        <div>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <h3>
            R${" "}
            {parseFloat(product.price)
              .toFixed(2)
              .toString()
              .replace(".", ",")}
          </h3>
        </div>
      </div>
      {children}
    </ProdutosStyles>
  );
}
