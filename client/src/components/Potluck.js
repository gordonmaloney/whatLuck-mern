import React, { Component } from "react";

const Potluck = ({ potluck }) => {
  return (
    <>
        <h1>{potluck.potluckTitle}</h1>:
      <li>
<b>Theme: </b> {potluck.potluckTheme}
      </li>
      <li>
        <b>Hosted by:</b> {potluck.potluckHost}
      </li>
      <li className="mb-4">
        <b>Essentials:</b>
        {potluck.essentials.map((essential, index) => {
          return (
            <>
              {" "}
              {essential}
              {index !== potluck.essentials.length - 1 ? "," : ""}{" "}
            </>
          );
        })}
      </li>
    </>
  );
};

export default Potluck;
