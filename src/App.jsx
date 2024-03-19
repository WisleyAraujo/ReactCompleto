import "./App.css";
import React from "react";
import Button from "./components/Button.jsx";
import Produto from "./components/Produto.jsx";
function App() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  const fetchDados = async (event) => {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
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
      {carregando && <p>Carregando...</p>}
      {!carregando && dados ? <Produto dados={dados} /> : ""}
    </div>
  );
}

export default App;
