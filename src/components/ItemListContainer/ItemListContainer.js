import React from "react";
import { useParams } from "react-router-dom"; // Importa useParams para acceder a los parámetros de la URL

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Accede al parámetro categoryId de la URL

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <h2>La mejor tienda de Cómics</h2>
      <p>
        {categoryId
          ? `Encuentra cómics de la categoría ${categoryId}`
          : "Encuentra todos los cómics."}
      </p>
    </div>
  );
};

export default ItemListContainer;
