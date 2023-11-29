import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext"; // Importa useCart
import { useNavigate } from "react-router-dom";

function CartWidget() {
  const { cartItems } = useCart(); // Utiliza useCart para acceder al estado del carrito
  const navigate = useNavigate();

  // Calcula el total de productos en el carrito
  const totalProductos = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleCartClick = () => {
    navigate("/cart"); // Redirige a la página del carrito
  };

  return (
    <span onClick={handleCartClick} style={{ cursor: "pointer" }}>
      <FontAwesomeIcon icon={faCartShopping} />
      {totalProductos > 0 && (
        <span className="cart-count">{totalProductos}</span>
      )}
    </span>
  );
}

export default CartWidget;
