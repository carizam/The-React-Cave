import React from "react";
import { useEffect, useState } from "react";
import Product from "../Product/Products";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ background: "#404040" }}>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <h2>La mejor tienda de Cómics</h2>
        <p>
          {categoryId
            ? `Encuentra cómics de la categoría ${categoryId}`
            : "Encuentra todos los cómics."}
        </p>
      </div>
      <Row>
        {products.map((product) => (
          <Col sm={4} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ItemListContainer;
