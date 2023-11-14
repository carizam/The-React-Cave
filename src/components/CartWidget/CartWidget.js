// CartWidget.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const [comicsEnCarrito, setComicsEnCarrito] = useState(0);

  useEffect(() => {
    const obtenerCantidadDeCarrito = async () => {
      try {
        const respuesta = await fetch("/comics.json");
        const data = await respuesta.json();

        setComicsEnCarrito(data.cantidad);
      } catch (error) {
        console.error("Error al obtener la cantidad del carrito: ", error);
      }
    };

    obtenerCantidadDeCarrito();
  }, []);

  return (
    <span>
      <FontAwesomeIcon icon={faCartShopping} />
      <span className="cart-count">{comicsEnCarrito}</span>
    </span>
  );
}

export default CartWidget;
