// ProductInfo.js
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function ProductInfo({ product }) {
  const { productId } = useParams();
  const [loadedProduct, setLoadedProduct] = useState(null);

  useEffect(() => {
    // Si se proporciona un cómic directamente, úsalo en lugar de hacer una nueva solicitud
    if (product) {
      setLoadedProduct(product);
    } else {
      fetch("/comics.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const foundProduct = data.find(
            (prod) => prod.productId === parseInt(productId, 10)
          );
          setLoadedProduct(foundProduct);
        })
        .catch((error) => {
          console.log("Fetch error: ", error);
        });
    }
  }, [productId, product]);

  if (!loadedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={loadedProduct.productImage} />
      <Card.Body>
        <Card.Title>{loadedProduct.productName}</Card.Title>
        <Card.Text>{loadedProduct.productDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductInfo;
