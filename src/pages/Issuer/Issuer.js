import React from "react";
import { useParams } from "react-router-dom";

function Issuer(props) {
  const params = useParams();

  return <div>{params.id}</div>;
}

export default Issuer;
