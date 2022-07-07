import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CartWidget from "./Components/CartWidget";
import ItemListContainer from "./Components/ItemListCointainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Cart.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const miFlow = "Flow Americano";

  return (
    <BrowserRouter>
      <Navbar>
        <CartWidget />
      </Navbar>
      <Routes>
        <Route
          path="/inicio"
          element={<ItemListContainer greeting={miFlow} />}
        />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
