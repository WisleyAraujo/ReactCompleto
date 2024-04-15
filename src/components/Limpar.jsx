import React from "react";
import { GlobalContextDesafio } from "./GlobalContextDesafio.jsx";
import { useContext } from "react";

function Limpar() {
  const { limparDados } = useContext(GlobalContextDesafio);
  console.log(limparDados);
  return <button onClick={limparDados}>Limpar Dados</button>;
}

export default Limpar;
