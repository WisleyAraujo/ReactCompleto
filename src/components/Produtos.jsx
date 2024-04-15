import React from "react";
import {
  GlobalContextDesafio,
  GlobalStorageDesafio,
} from "./GlobalContextDesafio";

function Produtos() {
  const { produto } = React.useContext(GlobalContextDesafio);
  // if (produto === null) return null;

  return (
    <div>
      {produto &&
        produto.map((produto, index) => (
          <li key={index}>{`Produto: ${produto.nome} R$:${produto.preco} `}</li>
        ))}
    </div>
  );
}

export default Produtos;
