import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../context/UseAuth";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const { user, isloading } = UseAuth();

  // console.log(isloading);
  if (isloading) {
    return <p> Loading... </p>;
  }
  // console.log(user)

  return (
    <>
      {user?.email ? (
        children
      ) : (
        <Navigate to="/regester" state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoute;
