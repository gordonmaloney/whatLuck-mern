import React, { Component } from "react";
import Bringing from './Bringing'
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const Potluck = ({ potluck }) => {
  
const Reply = () => {
  return (
    <>
    {potluck.replies.map((reply) => {
          return (
            <Col xs="12" sm="6" md="4">
            <Card className="bringing-card">
              <CardHeader><b>{reply.bringer}</b> is bringing...</CardHeader>
              <CardBody>
                {reply.bringing.map((bringItem, index) => {
                  return (
                    <>
                      {bringItem}
                      {index < reply.bringing.length - 2 ? ", " : ""}
                      {index === reply.bringing.length - 2 ? " and " : ""}
                    </>
                  );
                })}
              </CardBody>
            </Card>
            </Col>
          );
        })}
    </>
  )
}

  return (
    <>
        <h1><Link to={`potlucks/${potluck.idCode}`}>{potluck.potluckTitle}</Link></h1>
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
      <Row>
        <Reply />
      </Row>
    </>
  );
};

export default Potluck;
