import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, DropdownButton, Dropdown } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [option, setOption] = useState(null);
  const getProductDetail = async () => {
    let url = `my-json-server.typicode.com/dongcheon1020/H-M-page/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    setOption(data.size);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{"￦ " + product?.price}</div>
          <div>Consclous choice</div>
          <div>
            <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
              {option?.map((item, index) => (
                <Dropdown.Item key={index}>{item}</Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div>
            <button className="add-bt">추가</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
