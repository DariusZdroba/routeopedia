import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <div>
      ProductList
      <button
        className="btn btn-sm text-white border m-2"
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add
      </button>
      <button
        className="btn btn-sm text-white border m-2"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default ProductList;
