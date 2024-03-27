import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductsList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:3001/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductsList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
