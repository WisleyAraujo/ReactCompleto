import React, { useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = useState(0);

  function addUm() {
    return setContar((contar) => contar + 1);
  }
  function addDois() {
    return setContar((contar) => contar + 2);
  }

  return (
    <GlobalContext.Provider value={{ contar, addUm, addDois }}>
      {children}
    </GlobalContext.Provider>
  );
};
