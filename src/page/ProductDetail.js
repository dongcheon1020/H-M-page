import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();

  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
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
              {product?.size.map((item, index) => (
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
