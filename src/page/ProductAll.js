import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductsList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/dongcheon1020/H-M-page/products`;

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
      <Container>
        <Row>
          {productList.map((item, index) => (
            <Col key={index} lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
