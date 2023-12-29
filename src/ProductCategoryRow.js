import React from "react";

function ProductCategoryRow({ category }) {
    return (
      <tr className="category">
        <th colSpan="2">
          <hr />
          {category}
        </th>
      </tr>
    );
  }

export default ProductCategoryRow;