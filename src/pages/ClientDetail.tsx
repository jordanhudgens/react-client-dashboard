import React from "react";
import { useParams } from "react-router-dom";

const ClientDetail = () => {
  const { id }: { id: string } = useParams();

  return <div>Client stuff: {id}</div>;
};

export default ClientDetail;
