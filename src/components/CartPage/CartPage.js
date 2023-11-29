import React from "react";
import { Container, Row, Col, ListGroup, Button, Image } from "react-bootstrap"; // Asegúrate de incluir Image aquí

import { useCart } from "../../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const handleCheckout = () => {
    // Lógica para manejar el proceso de pago
  };

  return (
    <Container>
      <h2>Tu Carrito de Compras</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row>
              <Col md={2}>
                <Image src={item.image} fluid rounded />{" "}
                {/* Muestra la imagen del producto */}
              </Col>
              <Col md={4}>{item.name}</Col>
              <Col md={2}>Cantidad: {item.quantity}</Col>
              <Col md={2}>${item.price}</Col>
              <Col md={2}>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button onClick={handleCheckout}>Ir a Pagar</Button>{" "}
      {/* Ejemplo de uso de handleCheckout */}
    </Container>
  );
}

export default CartPage;
