import React from "react";

const UseRef = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [carrinho, setCarrinho] = React.useState(0);
  const [notifi, setNotifi] = React.useState(null);

  const timeOutRef = React.useRef();
  console.log(timeOutRef.current);
  function addCarItem() {
    setCarrinho(carrinho + 1);
    setNotifi(`Item adicionado no carrinho`);

    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      setNotifi(null);
    }, 2000);
    console.log(timeOutRef.current);
  }

  const inputElement = React.useRef();
  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <main>
      <div>
        <h1>UseRef na Pratica</h1>
        <br />
        <ul>
          {comentarios.map((comentarios) => (
            <li key={comentarios}>{comentarios}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </div>
      <br /> <br />
      <div>
        <p>{notifi}</p>
        <button onClick={addCarItem}>Adicionar Carrinho {carrinho}</button>
      </div>
    </main>
  );
};

export default UseRef;
