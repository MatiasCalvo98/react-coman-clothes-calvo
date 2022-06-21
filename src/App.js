import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CartWidget from "./Components/CartWidget";
import ItemListContainer from "./Components/ItemListCointainer";

function App() {
  const miFlow = "Flow Americano";

  return (
    <div>
      <Navbar>
        <CartWidget />
      </Navbar>
      <ItemListContainer greeting={miFlow} />
    </div>
  );
}

export default App;
