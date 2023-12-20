import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Button, Image } from "react-bootstrap"; // Asegúrate de incluir Image aquí

import { useCart } from "../../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    alert("Procediendo al pago...");
  };
  return (
    <Container>
      <h2>Tu Carrito de Compras</h2>
      {isCartEmpty ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} fluid rounded />{" "}
                </Col>
                <Col md={4}>{item.name}</Col>
                <Col md={2}>Cantidad: {item.quantity}</Col>
                <Col md={2}>${item.price}</Col>
                <Col md={2}>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Eliminar
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {!isCartEmpty && <Button onClick={handleCheckout}>Ir a Pagar</Button>}
    </Container>
  );
}

export default CartPage;
