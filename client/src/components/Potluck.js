import React, { Component } from "react";
import Bringing from './Bringing'
import { Link } from "react-router-dom";

const Potluck = ({ potluck }) => {
  
const Reply = () => {
  return (
    <>
    {potluck.replies.map((reply) => {
          return (
            <>
              <p>{reply.bringer} is bringing {reply.bringing.map((bringItem, index) => {
    return (
      <>
        
        {bringItem}
        {index < reply.bringing.length - 2 ? ", " : "" }
        {index === reply.bringing.length - 2 ? " and " : "" }
      </>
    );
  })}</p>
            </>
          );
        })}
    </>
  )
}

  return (
    <>
        <h1>{potluck.potluckTitle}</h1>
        <p>Unique id: <Link to={`potlucks/${potluck.idCode}`}>{potluck.idCode}</Link></p>
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
              {index < potluck.essentials.length - 2 ? ", " : "" }
              {index === potluck.essentials.length - 2 ? " and " : "" }
            </>
          );
        })}
      </li>

      <Reply />
      <Bringing potluck={potluck}/>
    </>
  );
};

export default Potluck;
