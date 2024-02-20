import React from "react";
import { useParams } from "react-router-dom";
const CryptoDetail = () => {
  const { cryptoSymbol, id } = useParams();
  return (
    <div>
      <p className="h2 text-center text-success">
        CryptoDetail for {cryptoSymbol}
      </p>
      <p className="h3 text-center text-warning"> id= {id}</p>
    </div>
  );
};

export default CryptoDetail;
