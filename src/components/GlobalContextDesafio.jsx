// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global
import React, { useState } from "react";

export const GlobalContextDesafio = React.createContext();

export const GlobalStorageDesafio = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limparDados() {
    return setProduto(null);
  }

  return (
    <GlobalContextDesafio.Provider value={{ produto, setProduto, limparDados }}>
      {children}
    </GlobalContextDesafio.Provider>
  );
};
