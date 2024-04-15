import "./App.css";
import { GlobalStorageDesafio } from "./components/GlobalContextDesafio.jsx";
import Limpar from "./components/Limpar.jsx";
import Produtos from "./components/Produtos.jsx";

function App() {
  return (
    <GlobalStorageDesafio>
      <Produtos />
      <Limpar />
    </GlobalStorageDesafio>
  );
}

export default App;
