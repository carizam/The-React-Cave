import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <h2>La mejor tienda de Cómics</h2>
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
