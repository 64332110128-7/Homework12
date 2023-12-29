import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products, filterText, inStockOnly }) {
    // const rows = [];
    let lastCategory = null;
  
    // products.forEach((product) => {
    //   if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
    //     return;
    //   }
    //   if (inStockOnly && !product.stocked) {
    //     return;
    //   }
    //   if (product.category !== lastCategory) {
    //     rows.push(
    //       <ProductCategoryRow
    //         category={product.category}
    //         key={product.category} />
    //     );
    //   }
    //   rows.push(
    //     <ProductRow
    //       product={product}
    //       key={product.name} />
    //   );
    //   lastCategory = product.category;
    // });

    const productRows = products.reduce((ac, product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return ac;
      }
      if (inStockOnly && !product.stocked) {
        return ac;
      }
      if (product.category !== lastCategory) {
        ac.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      ac.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
      return ac;
    }, []);
  
    return (
      <table className="table-fruit">
        <thead>
          <tr className="name-price">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productRows}</tbody>
      </table>
    );
  }

export default ProductTable;