import React, { useContext } from "react";
import { Context } from "../App.js";

function Random() {
  const person = useContext(Context);

  return <div>{person.name}</div>;
}

export default Random;
