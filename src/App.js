import { createContext, useState } from "react";
import "./App.css";

import Random from "./components/Random";

export const Context = createContext();

function App() {
  const [person, setPerson] = useState({
    name: "Daniel",
    favorite: {
      color: "purple",
      food: "pizza",
    },
  });

  return (
    <div className="App">
      <Context.Provider value={person}>
        <Random />
      </Context.Provider>
    </div>
  );
}

export default App;
