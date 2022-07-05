import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CartWidget from "./Components/CartWidget";
import ItemListContainer from "./Components/ItemListCointainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const miFlow = "Flow Americano";

  return (
    <BrowserRouter>
      <Navbar>
        <CartWidget />
      </Navbar>
      <ItemListContainer greeting={miFlow} />
    </BrowserRouter>
  );
}

export default App;
