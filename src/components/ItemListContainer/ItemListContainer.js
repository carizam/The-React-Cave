import React, { useEffect, useState } from "react";
import Product from "../Product/Products";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("products.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Categoría recibida desde la URL:", category);
        console.log("Productos originales:", data);

        // Filtra los productos según la categoría seleccionada
        const filteredProducts = category
          ? data.filter(
              (product) =>
                product.publisher.toLowerCase() === category.toLowerCase()
            )
          : data;

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [category]);

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
          {category
            ? `Encuentra cómics de la categoría ${category}`
            : "Encuentra todos los cómics de tus editoriales favoritas."}
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
