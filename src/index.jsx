import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Product from "./Components/Pages/Product";
import CreateProduct from "./Components/Pages/CreateProduct";
import ProductDetails from "./Components/Pages/ProductDetails";
import ProductList from "./Components/Pages/ProductList";
import NotFound from "./Components/Pages/NotFound";
import CryptoDetail from "./Components/Pages/CryptoDetail";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/cryptodetail/:cryptoSymbol/:id"
        element={<CryptoDetail />}
      ></Route>
      <Route
        path="/cryptodetail/:cryptoSymbol"
        element={<CryptoDetail />}
      ></Route>
      <Route path="/product">
        <Route index element={<Product />}></Route>
        <Route path="create" element={<CreateProduct />}></Route>
        <Route path="details" element={<ProductDetails />}></Route>
        <Route path="list" element={<ProductList />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
