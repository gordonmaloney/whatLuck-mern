import React from "react";
import { useSelector } from "react-redux";
import AdminPotluck from "./Potluck";
import { CircularProgress } from "@material-ui/core";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

const AdminPotluckList = () => {
  const potlucks = useSelector((state) => state.potlucks);

  //const reversedPotlucks = potlucks.reverse()

  const displayPotlucks = potlucks.map((potluck) => {
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