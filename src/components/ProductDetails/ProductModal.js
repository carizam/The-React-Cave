import React, { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";

function ProductModal({ show, handleClose, product }) {
  const [quantity, setQuantity] = useState(1);
  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () => setQuantity(Math.max(quantity - 1, 1));
  const totalPrice = product?.price * quantity;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tu Carrito de Compras</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <img
              src={product?.image}
              alt={product?.name}
              style={{ width: "100px", marginRight: "10px" }}
            />
            <div>
              <p>{product?.name}</p>
              <p>{product?.description}</p>
            </div>
          </Col>
          <Col md={6} className="text-right">
            <p>Precio: ${product?.price}</p>
            <div className="d-inline-block">
              <Button
                variant="outline-secondary"
                onClick={handleDecreaseQuantity}
                className="me-2"
              >
                -
              </Button>
              <span>{quantity}</span>
              <Button
                variant="outline-secondary"
                onClick={handleIncreaseQuantity}
                className="ms-2"
              >
                +
              </Button>
            </div>
            <p>Total: ${totalPrice}</p>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Continuar Comprando
        </Button>
        <Button variant="primary">Finalizar Compra</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
