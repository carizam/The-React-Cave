import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Toast } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { productId } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "products", productId);

    getDoc(productRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log("No documento encontrado!");
        }
      })
      .catch((error) => {
        console.error("Error al obtener documento: ", error);
      });
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product, 1); // Añade el producto al carrito
    setShowToast(true); // Muestra el Toast
    setTimeout(() => setShowToast(false), 3000); // Oculta el Toast después de 3 segundos
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
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
          <Button variant="primary" onClick={handleAddToCart}>
            Agregar al Carrito
          </Button>
        </Card.Body>
      </Card>

      <Toast
        className="mi-toast-personalizado"
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Body>Producto agregado al carrito</Toast.Body>
      </Toast>
    </div>
  );
};

export default ProductDetails;
