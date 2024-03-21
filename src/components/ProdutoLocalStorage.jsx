import React from "react";

const ProdutoLocalStorage = () => {
  const [produto, setProduto] = React.useState(null);
  const [dados, setDados] = React.useState(null);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);
  React.useEffect(() => {
    const storagedProduto = window.localStorage.getItem("produto");
    if (storagedProduto !== null) setProduto(storagedProduto);
  }, []);
  React.useEffect(() => {
    async function fetchDados() {
      if (produto !== null) {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${produto}`
        );
        const json = await response.json();
        setDados(json);
      }
    }
    fetchDados();
  }, [produto]);

  return (
    <main>
      <div>
        <h1>Preferencia: {produto}</h1>
        <button style={{ margin: "1rem" }} onClick={handleClick}>
          notebook
        </button>
        <button onClick={handleClick}>smartphone</button>
      </div>
      {dados && (
        <section>
          <h1>{dados.nome}</h1>
          <p>R$: {dados.preco}</p>
        </section>
      )}
    </main>
  );
};

export default ProdutoLocalStorage;
