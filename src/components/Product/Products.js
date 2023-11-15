import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{`Precio: $${product.price.toLocaleString(
          "es-CO"
        )}`}</Card.Text>{" "}
        <Button variant="primary" as={Link} to={`/product/${product.id}`}>
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
