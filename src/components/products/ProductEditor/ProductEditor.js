import React from "react";

import { ProductDataEntryForm } from "../ProductDataEntryForm";
import { ProductPreview } from "../ProductPreview";
import { ProductEditorStyles } from "./styles";

function ProductEditor({ children, productImage, productName, productPrice, productDescription, setProductImage, handleProductName, handleProductPrice, handleProductDescription, ...props }) {
  return (
    <ProductEditorStyles {...props}>
      <ProductDataEntryForm handleProductName={handleProductName} handleProductPrice={handleProductPrice} handleProductDescription={handleProductDescription} setProductImage={setProductImage} />
      <ProductPreview productImage={productImage} productName={productName} productPrice={productPrice} productDescription={productDescription} />
    </ProductEditorStyles>
  );
}

export default ProductEditor;
