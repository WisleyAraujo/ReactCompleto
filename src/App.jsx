import "./App.css";
import Produtos from "./components/Produtos.jsx";
import { GlobalStorage } from "./components/GlobalContext.jsx";

function App() {
  return (
    <GlobalStorage>
      <Produtos />
    </GlobalStorage>
  );
}

export default App;
