import React from "react";
import Button from "../Button";
import { TotalProdutotyles } from "./TotalProdutostyle";


export default function TotaldoProduto({ itensDoCarrinho, removeAllItensDoCarrinho }) {

  function ValorTotal(itensDoCarrinho) {
    const sunValueExpensesResult = itensDoCarrinho.reduce((valorAnterior, valorAtual) => {
      return Number(valorAnterior) + Number(valorAtual.price);
    }, 0);

    return sunValueExpensesResult;
  }

  return (
    <>
      < TotalProdutotyles>
        <div className="text-align">
          <h3>Total</h3>
          <p>
            R${" "}
            {parseFloat(ValorTotal(itensDoCarrinho)).toFixed(2).toString().replace(".", ",")}
          </p>
        </div>
        <Button text="Remover tudo" onClick={removeAllItensDoCarrinho} />
      </ TotalProdutotyles>
    </>
  );
}
