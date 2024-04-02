import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useAsyncError } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
// 상품 담기
// 햄거버바
// 디자인
