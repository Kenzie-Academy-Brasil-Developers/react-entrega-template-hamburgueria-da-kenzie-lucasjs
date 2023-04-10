import React from "react";
import CarrinhoCard from "../Carrinho";
import { CarrinhoDeComprasStyle } from "./CarrinhoDeComprasStyle";
import TotaldoProduto from "../TotalDoProduto";
export default function ItensDoCarrinho({ itensDoCarrinho, removeProduct, removeAllItensDoCarrinho }) {
  return (
    <>
      <CarrinhoDeComprasStyle>
        <h2 className="title">Carrinho de compras</h2>

        {(() => {
          if (!itensDoCarrinho.length) {
            return (
              <ul className="emptyList">
                <li>
                  <h2>Sua sacola está vazia</h2>
                  <p>Adicione itens</p>
                </li>
              </ul>
            );
          } else {
            return (
              <>
                <ul className="productList">
                  {itensDoCarrinho.map((product) => {
                    return (
                      <CarrinhoCard product={product}>
                        <button onClick={() => removeProduct(product.id)}>
                          Remover
                        </button>
                      </CarrinhoCard>
                    );
                  })}
                </ul>
                <TotaldoProduto removeAllItensDoCarrinho={removeAllItensDoCarrinho} itensDoCarrinho={itensDoCarrinho} />
              </>
            );
          }
        })()}


      </CarrinhoDeComprasStyle>
    </>
  );
}