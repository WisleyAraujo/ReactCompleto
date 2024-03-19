import React from "react";

const Produto = () => {
  const [dados, setDados] = React.useState(null);

  const fetchDados = async (event) => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
  };
  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={fetchDados}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={fetchDados}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={fetchDados}>
        tablet
      </button>
      {dados && (
        <>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco}</p>
          <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </>
      )}
    </div>
  );
};

export default Produto;
