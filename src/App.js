import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductInfo from "./components/ProductDetails/ProductInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/The-React-Cave" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ProductInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
