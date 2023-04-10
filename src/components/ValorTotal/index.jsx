import React from "react";

function ValorTotal(itensDoCarrinho) {
  const prices = itensDoCarrinho.map(item => Number(item.price));
  const sunValueExpensesResult = prices.reduce((total, price) => total + price, 0);

  return sunValueExpensesResult;
}

export default ValorTotal;

