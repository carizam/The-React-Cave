import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const comicsEnCarrito = 5;

  return (
    <span>
      <FontAwesomeIcon icon={faCartShopping} />
      <span className="cart-count">{comicsEnCarrito}</span>
    </span>
  );
}

export default CartWidget;
