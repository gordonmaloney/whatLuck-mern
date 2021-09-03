import React, { Component } from "react";
import { useSelector } from "react-redux";
import Potluck from "./Potluck";
import { CircularProgress } from "@material-ui/core";

const PotluckList = () => {
  const potlucks = useSelector((state) => state.potlucks);
  console.log("test", potlucks);

  return !potlucks.length ? (
    <CircularProgress />
  ) : (
    <>
      {potlucks.map((potluck) => (
        <Potluck potluck={potluck} />
      ))}
    </>
  );

  return <></>;
};

export default PotluckList;
