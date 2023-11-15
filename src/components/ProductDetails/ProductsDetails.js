import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/products.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const selectedProduct = data.find((p) => p.id === Number(productId));

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error(`Product with id ${productId} not found`);
        }
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () => setQuantity(Math.max(quantity - 1, 1));

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <Card
      style={{ maxWidth: "600px", margin: "auto" }}
      className="mx-auto my-5"
    >
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="mx-auto"
        style={{ maxWidth: "50%", height: "auto", margin: "10px" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{ fontWeight: "bold" }}>
          {product.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {product.extendedInformation}
        </Card.Text>
        <Card.Text>{`Precio: $${product.price.toLocaleString(
          "es-CO"
        )}`}</Card.Text>
        <Card.Text>Cantidad: {quantity}</Card.Text>
        <Button variant="outline-secondary" onClick={handleDecreaseQuantity}>
          -
        </Button>{" "}
        <Button variant="outline-secondary" onClick={handleIncreaseQuantity}>
          +
        </Button>
        <Button
          variant="primary"
          onClick={() => alert("Producto agregado al carrito")}
        >
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetails;
