// ItemListContainer.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Products from "../Product/Products.js";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/comics.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (categoryId) {
          setProducts(
            data.filter((product) => product.category === categoryId)
          );
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.log("Fetch error: ", error);
      });
  }, [categoryId]);

  return (
    <div>
      <div>
        <p>
          {categoryId
            ? `Encuentra cómics de la categoría ${categoryId}`
            : "Encuentra todos los cómics."}
        </p>
      </div>
      <Row>
        {products.map((product) => (
          <Col sm={4} key={product.productId}>
            {/* Pasa la información del cómic al componente Products */}
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ItemListContainer;
