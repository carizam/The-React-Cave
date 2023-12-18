import React, { useEffect, useState } from "react";
import Product from "../Product/Products";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const q = query(productsCollection);

    getDocs(q)
      .then((querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      })
      .catch((error) => {
        console.error("Error al obtener documentos: ", error);
      });
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
};

export default ItemListContainer;
