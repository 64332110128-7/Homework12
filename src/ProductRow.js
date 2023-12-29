import React from "react";

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: '#e6770b' }}>
        {product.name}
      </span>;
  
    return (
      <tr className="productname-price">
        <td className="name-fruit">{name}</td>
        <td className="price">{product.price}</td>
      </tr>
    );
  }

export default ProductRow;