import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetails from "./components/ProductDetails/ProductsDetails";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import CartPage from "./components/CartPage/CartPage"; // Asegúrate de importar CartPage

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:category" element={<ItemListContainer />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
