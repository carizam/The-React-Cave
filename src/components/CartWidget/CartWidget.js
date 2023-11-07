import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  // Usamos useState para mantener un estado para la cantidad de cómics en el carrito
  const [comicsEnCarrito, setComicsEnCarrito] = useState(0);

  // Simulamos una llamada a una API o algún otro método para obtener la cantidad real de cómics en el carrito
  useEffect(() => {
    // Supongamos que aquí realizas una llamada a una API o alguna lógica para obtener la cantidad real de cómics en el carrito
    const obtenerCantidadDeCarrito = async () => {
      try {
        // Simulamos la obtención de datos de un servidor o cualquier otra fuente de datos
        const respuesta = await fetch("/api/cart"); // Reemplaza "/api/cart" con la ruta correcta para obtener la cantidad de cómics en el carrito
        const data = await respuesta.json();

        // Actualizamos el estado con la cantidad real de cómics en el carrito
        setComicsEnCarrito(data.cantidad); // Asumiendo que la respuesta contiene la cantidad de cómics en el carrito
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
