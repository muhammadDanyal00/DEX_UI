import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Swap from "./pages/Swap";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  // default views
  const [view, setView] = useState("Swap");
  const [section, setSection] = useState("Trade");

  const handleSelect = (item) => {
    if (item === "Trade" || item === "Solana" || item === "Perps") {
      setSection(item);
      if (item === "Trade") {
        setView("Swap");
      }
    } else {
      setView(item);
    }
  };

  return (
    <>
      <Navbar onSelect={handleSelect} />
      {section === "Trade" ? <Swap view={view} /> : <UnderConstruction />}
    </>
  );
}

export default App;
