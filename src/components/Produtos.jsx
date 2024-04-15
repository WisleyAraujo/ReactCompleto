import React from "react";
import { GlobalContext, GlobalStorage } from "./GlobalContext.jsx";

function Produtos() {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      Produtos: {global.contar}
      <br />
      <button onClick={() => global.addDois()}>Adicionar</button>
    </div>
  );
}

export default Produtos;
