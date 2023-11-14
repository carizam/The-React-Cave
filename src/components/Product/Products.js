import React from "react";
import { Link } from "react-router-dom";
import ProductInfo from "../ProductDetails/ProductInfo";

function Products({ product }) {
  return (
    <div>
      <Link to={`/product/${product.productId}`}>
        {/* Pasa la información del cómic al componente ProductInfo */}
        <ProductInfo product={product} />
      </Link>
    </div>
  );
}

export default Products;
