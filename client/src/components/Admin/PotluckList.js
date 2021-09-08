import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import AdminPotluck from "./Potluck";
import { CircularProgress } from "@material-ui/core";
import AdminDashboard from "./AdminDashboard";

const AdminPotluckList = () => {
  const potlucks = useSelector((state) => state.potlucks);


  const displayPotlucks = potlucks.reverse().map((potluck) => {
       return (
        <AdminPotluck potluck={potluck} />
       )
  })


  return !potlucks.length ? (
    <CircularProgress />
  ) : (
    <>
  <AdminDashboard />
  {displayPotlucks}
    </>
  );
};

export default AdminPotluckList;