import { useState } from "react";
import "./App.css";
import FlagContainer from "./Flag/FlagContainer";
import Navbar from "./Navbar/Navbar";
import ValuesContext from "./context/ValuesContext";

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const [flagCodes, setFlagCodes] = useState([]);

  return (
    <ValuesContext.Provider
      value={{ isDisplay, setIsDisplay, flagCodes, setFlagCodes }}
    >
      <div className="container">
        <Navbar />
        <FlagContainer />
      </div>
    </ValuesContext.Provider>
  );
}

export default App;
