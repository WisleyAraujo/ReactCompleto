import React from "react";
import { useState } from "react";

const ButtonModal = ({ setModal }) => {
  const handleClick = () => {
    setModal((prev) => !prev);
  };

  return <button onClick={handleClick}>Abrir</button>;
};
handleClick
export default ButtonModal;
